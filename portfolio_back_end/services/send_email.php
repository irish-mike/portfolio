<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Set content type for JSON response and handle CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Load environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../..');
$dotenv->load();

// Check the request method
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    sendResponse(405, 'error', 'Invalid request method.');
}

$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8') : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8') : '';

// Validate the input
if (!$name || !$email || !$message) {
    sendResponse(400, 'error', 'Please fill in all required fields.');
}

try {
    // Send the main email to you
    sendEmail(
        $_ENV['GMAIL_USERNAME'],
        'michaelgr@live.ie',
        'New Contact Form Submission',
        "<h3>New message from your contact form</h3>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong><br>{$message}</p>"
    );

    // Send acknowledgment email to the user
    sendEmail(
        $_ENV['GMAIL_USERNAME'],
        $email,
        'Thank you for your message',
        "<p>Dear {$name},</p>
         <p>Thank you for reaching out! I have received your message and will aim to get back to you within 24 hours.</p>
         <p>Best regards,<br>Michael Grinnell</p>"
    );

    // Return success response
    sendResponse(200, 'success', 'Message has been sent successfully, and acknowledgment email was sent to the user!');

} catch (Exception $e) {
    error_log("Mailer Error: {$e->getMessage()}");
    // Return error response
    sendResponse(500, 'error', 'Message could not be sent. Please try again later.');
}

exit; // Ensure the script stops executing

/**
 * Generic function to send an email using PHPMailer
 */
function sendEmail(string $fromEmail, string $toEmail, string $subject, string $body): void
{
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['GMAIL_USERNAME'];  // Your Gmail address from .env file
    $mail->Password = $_ENV['GMAIL_PASSWORD'];  // Gmail app-specific password from .env file
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Set the sender and recipient
    $mail->setFrom($fromEmail, 'Michael Grinnell');
    $mail->addAddress($toEmail);

    // Set email content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;

    // Send the email
    $mail->send();
}

/**
 * Send JSON response
 */
function sendResponse(int $statusCode, string $status, string $message): void
{
    http_response_code($statusCode);
    echo json_encode([
        'status' => $status,
        'message' => $message
    ]);
    exit;
}


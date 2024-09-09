<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include Composer's autoloader
require 'vendor/autoload.php';


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Basic input validation and sanitization
    $name = isset($_POST['name']) ? filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
    $message = isset($_POST['message']) ? filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING) : '';

    // Check if input is valid
    if (!$name || !$email || !$message) {
        echo 'Please fill in all required fields.';
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['GMAIL_USERNAME'];  // Your Gmail address from .env file
        $mail->Password = $_ENV['GMAIL_PASSWORD'];  // Gmail app-specific password from .env file
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($_ENV['GMAIL_USERNAME'], 'Michael Grinnell');
        $mail->addAddress('michaelgr@live.ie');  // Your recipient email address

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "<h3>New message from your contact form</h3>
                          <p><strong>Name:</strong> {$name}</p>
                          <p><strong>Email:</strong> {$email}</p>
                          <p><strong>Message:</strong><br>{$message}</p>";

        $mail->send();
        echo 'Message has been sent successfully!';
    } catch (Exception $e) {
        // Log the error (you can log to a file or error tracking service)
        error_log("Mailer Error: {$mail->ErrorInfo}");

        // Show generic error message to user
        echo "Message could not be sent. Please try again later.";
    }
}
?>

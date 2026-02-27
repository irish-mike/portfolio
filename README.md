# MichaelGrinnell.com Portfolio Project

## Overview

This repository contains the code for [michaelgrinnell.com](https://michaelgrinnell.com). The project uses a React frontend and a Directus/PHP backend, managed via a unified configuration at the project root.

---

## Prerequisites

* **Node.js 20 LTS** (nvm recommended)
* **PHP 8.3** & **Composer** (for contact form backend)
* **Docker** (only if running the CMS locally)

---

## 1. Initial Setup & Configuration

Start by cloning the repository and creating your configuration file at the **root** of the project. This file is shared across the frontend and backend services.

1. **Clone the repository**
```bash
git clone git@github.com:irish-mike/portfolio.git
cd portfolio

```


2. **Create Root Environment File**
Create a file named `.env` in the current directory:
```env
# Frontend Config
VITE_BACK_END_URL=https://your-api-placeholder.com

# Backend Config (Contact Form)
GMAIL_USERNAME=your_gmail_username@gmail.com
GMAIL_PASSWORD=your_app_specific_password

```

---

## 2. Frontend Setup

The frontend reads the `.env` from the parent directory automatically via Vite configuration.

1. **Install and Run**
```bash
cd portfolio_front_end
nvm use 20
npm install
npm run dev

```


2. **Access the Site**
The development server runs at: `https://localhost:5173`
> **Note:** Local HTTPS is enabled. You may need to accept the browser's self-signed certificate warning to allow the frontend to communicate with your API.



---

## 3. Backend Setup

### Directus (Headless CMS)

To run the blog and database locally instead of using the production API:

```bash
cd ../portfolio_back_end
docker-compose up -d
# Admin interface: http://localhost:8055

```

### Contact Form Service

The contact form uses PHPMailer. Ensure you have configured the Gmail credentials in your root `.env`.

```bash
cd services
composer install

```

*Note: Ensure your local web server (Nginx/Apache) is configured to serve this directory for the PHP scripts to execute.*

---

## Technical Overview

### Key Features

* **Hybrid Data Sourcing:** Switch between Local and Production APIs via the root `.env`.
* **Technical Blog:** Content managed via Directus Headless CMS.
* **Security:** Local HTTPS mirrors production CORS behavior for more accurate testing.

### Built With

* **Frontend:** React 18, TypeScript 5, Vite 5, Bootstrap 5
* **Backend:** Directus (Node/Docker), PHP 8.3 (PHPMailer)

---

## Author

**Michael Grinnell** – [michaelgrinnell.com](https://michaelgrinnell.com)

---
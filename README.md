# MichaelGrinnell.com Portfolio Project

## Overview

This repository contains the code for [michaelgrinnell.com](https://michaelgrinnell.com). The project uses a React frontend and a Directus/PHP backend, managed via a unified configuration at the project root.

---

## Prerequisites

* **Node.js 24 LTS** (nvm recommended)
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
nvm use 24
npm install
npm run dev

```


2. **Access the Site**
The development server runs at: `http://localhost:5173`



---

## 3. Backend Setup

### Directus (Headless CMS)

To run the blog and database locally instead of using the production API:

The root `.env` must also contain a stable `SECRET`, `DB_CLIENT=sqlite3`, and
`DB_FILENAME=/database/data.db`. Keep the same `SECRET` and database path when
upgrading an existing instance. Set `VITE_BACK_END_URL=http://localhost:8055`
to make the local frontend use the local CMS.

```bash
cd ../portfolio_back_end
docker-compose up -d
# Admin interface: http://localhost:8055

```

The Compose file pins Directus to version 12.5.0. Its `database` and `uploads`
folders are mounted outside the container so posts and media persist across
image updates. Before any production deployment, the deployment script stops
Directus and archives the existing database, uploads, configuration, and
previous Compose file in `.directus-backups` inside the deployed project. The
archive is private to the deployment account and is retained for manual
rollback. Check the blog and CMS login after an upgrade before deleting any
older archive.

The production workflow also rehearses the new image against a copy of the
repository database. A failed migration or public posts API check blocks the
production deployment.

To roll back a failed upgrade, stop Directus, extract the chosen archive into
the deployed project directory, then start Directus with the restored Compose
file. Restoring the archive replaces content created after that backup.

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

# MichaelGrinnell.com Portfolio Project

## Overview

This repository contains the code for my portfolio website: [michaelgrinnell.com](https://michaelgrinnell.com), a platform that showcases my software development projects, technical articles, and freelance services. The site also includes a blog, an interactive contact form, and a responsive design with light/dark mode options.

### Key Features

- Portfolio of software development projects
- Technical blog with articles and tutorials
- Contact form integrated with a PHP backend
- Responsive design with light/dark mode
- Client-side caching for improved performance
- Customizable backend for blog posts using Directus
- Interactive elements to enhance user engagement

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version specified in `.nvmrc` or `package.json`)
- **Docker** for running the backend services
- **Composer** for handling PHP dependencies
- **PHP 8.3** for running the backend services

---

## Installation and Setup

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone git@bitbucket.org:michael_grinnell/portfolio_2024.git
   cd portfolio_front_end
   ```

2. **Install dependencies**:
   Ensure you have the correct version of Node.js (use [nvm](https://github.com/nvm-sh/nvm) to manage versions).
   ```bash
   nvm install
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build the production version**:
   ```bash
   npm run build
   ```

The frontend is powered by **React**, **TypeScript**, and **Vite**.

### Backend Setup (Directus)

1. **Navigate to the backend directory**:
   ```bash
   cd portfolio_back_end
   ```

2. **Run Directus using Docker**:
   You can start Directus with the following Docker command:
   ```bash
   docker-compose up -d
   ```

   This will spin up the Directus container, which acts as the backend CMS for managing blog posts. Directus is currently configured for SQLite, and blog posts are stored and managed through the Directus API.

3. **Access the Directus dashboard**:
   Once the container is running, you can access the Directus admin interface by navigating to `http://localhost:8055`.

---

### Contact Form Setup

The contact form is built with **React** on the frontend and sends requests to a **PHP backend** using **Axios**. The backend script sends an email via **PHPMailer** using a Gmail account.

#### Steps to Set Up the Contact Form

1. **Install PHP dependencies**:
   From the `portfolio_back_end/services` directory, install the required PHP dependencies using Composer:
   ```bash
   composer install
   ```

2. **Configure the environment variables**:
   Create a `.env` file in the `portfolio_back_end/services` directory with the following:
   ```bash
   GMAIL_USERNAME=your_gmail_username@gmail.com
   GMAIL_PASSWORD=your_app_specific_password
   ```

3. **Set up virtual hosts**:
   You'll need to map the PHP service directory to your web server's virtual host. In the virtual host file, create an alias to point to the backend service folder, enabling the frontend to call the script.

4. **Test the contact form**:
   Once the setup is complete, the form can be tested by filling it out on the website. The form sends a POST request to the backend, which processes the email via PHPMailer.

---

## Built With

- **[React.js](https://reactjs.org/)** – Frontend framework
- **[Directus](https://directus.io/)** – Headless CMS for managing blog posts
- **[Bootstrap](https://getbootstrap.com/)** – Frontend styling framework
- **[Vite](https://vitejs.dev/)** – Fast build tool for frontend
- **[PHPMailer](https://github.com/PHPMailer/PHPMailer)** – Used to send emails from the contact form
- **[Docker](https://www.docker.com/)** – Containerized backend services

---

## Environment Variables

To keep sensitive data secure, use a `.env` file in both the frontend and backend for any configuration settings, including the API base URL, Gmail credentials, and database details. Example environment variables:

### Frontend `.env`
```
REACT_APP_API_BASE_URL=https://api.michaelgrinnell.com
```

### Backend `.env`
```
GMAIL_USERNAME=your_gmail_username@gmail.com
GMAIL_PASSWORD=your_app_specific_password
```

---

## Author

- **Michael Grinnell** – [Portfolio](https://michaelgrinnell.com)

---


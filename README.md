![Ares Ticket Management System](apps/web/public/logos/logo.png?raw=true "Ares Ticket Management System")

# Ares Ticket Management System

![GitHub Repo stars](https://img.shields.io/github/stars/jbalde/ares)

## ✨ Features

- **Ticket Creation**: Standard ticket creation with a Markdown editor and file upload support
- **Client History Log**: A complete log of client interactions and activity
- **Markdown-Based Notebook**: Includes support for to-do lists and organized note-taking
- **Responsive Design**: Optimized for all screen sizes, from mobile to 4K displays
- **Multi-Deployment Ready**: Easily deployable using Docker and PM2
- **User-Friendly**: Designed with a simple, intuitive workflow for ease of use
- **Multi-Organization Support**: Ready for SaaS-style brand or client management

## Project Background

This project was born from the idea of creating a ticket management system similar to Jira Service Management or Freshdesk.

While searching for an open-source alternative, I came across many outdated projects filled with paid modules, others that are no longer open-source, and many that have been abandoned for years.

Alternatives like **TrueDesk** and **Peppermint** served as sources of inspiration for building this project.

## 🚀 Getting Started

Follow these steps to set up your local development environment:

1. **Create your environment file.** Copy the example configuration file to `.env`:

   ```bash
   cp apps/web/env.example apps/web/.env
   ```

2. **Fill in the required variables.** Edit `apps/web/.env` and provide the database credentials. If you do not have a PostgreSQL instance with connection pooling, you can reuse the same connection string for all URLs.

3. **Initialize the database.** From the `apps/web` directory run the Prisma command to push the schema:

   ```bash
   npx prisma push
   ```

4. **Start the development server.** From the project root run:

   ```bash
   yarn dev
   ```

Give a ⭐️ if this project helped you!

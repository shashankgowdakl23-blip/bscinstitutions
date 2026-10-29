# BSC Institutions

Official website for BSC Institutions — stock market training, mentorship, and financial counselling.

**Live site:** [https://bscinstitutions.com](https://bscinstitutions.com)

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui
- React Router
- PHP + PHPMailer (enquiry form email API)

## Requirements

- Node.js 18+ and npm
- PHP 8.1+ and Composer (only for the enquiry form API)

## Install and Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:8080`.

To create a production build:

```bash
npm run build
```

The build output is generated in the `dist/` folder.

Useful commands:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

## Enquiry Form API

The contact form posts to `/api/send_enquiry.php`.

1. Install PHP dependencies:

   ```bash
   cd api
   composer install
   ```

2. Set the Hostinger mailbox details in `api/send_enquiry.php` (SMTP host, username, password, and recipient). Credentials are available in **hPanel → Emails → Manage Email → Configuration**.

The PHP endpoint only runs on a PHP host; the Vite dev server serves the frontend only.

## Deployment

This project is deployed on **Hostinger** and is connected to our **Hostinger account** (hPanel).

To deploy an update:

1. Run `npm run build`.
2. Upload the contents of `dist/` to `public_html/` in Hostinger.
3. Upload the `api/` folder (including `vendor/`) to `public_html/api/`.


# Prem Basnet Cybersecurity Portfolio

A fully responsive, dark-themed cybersecurity portfolio for **Prem Basnet** — CSOC & SIEM Manager and Information Security Officer with 9+ years of experience.

## Live site

**Production:** https://basnetprem.com.np  
**Dev preview:** runs on port 5000 via `npm run dev`

## Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Build tool  | Vite 6                         |
| Framework   | React 19                       |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations  | Framer Motion 11               |
| Icons       | Lucide React                   |
| Routing     | React Router v7 + react-router-hash-link |
| Contact form| FormSubmit.co (zero-backend)   |
| Fonts       | CentraNo2 (local), JetBrains Mono (Google Fonts) |

## Running the app

```bash
npm run dev     # dev server on port 5000
npm run build   # production build → dist/
npm run preview # preview the production build
```

## Project structure

```
src/
  main.jsx              # entry point (BrowserRouter here)
  App.jsx               # root component
  index.css             # Tailwind v4 import + @theme + global styles + animations
  assets/
    font/               # CentraNo2 font files (.ttf)
    img/                # images, SVGs, project thumbnails
  components/
    NavBar.jsx          # fixed navbar, scroll effect, mobile menu
    Banner.jsx          # hero section with typewriter effect
    Skills.jsx          # three-column skill cards with Framer Motion
    Experience.jsx      # timeline work history + education cards
    Certifications.jsx  # 9 certification cards grid
    Projects.jsx        # 6 featured work cards with hover overlay
    ProjectCard.jsx     # reusable project card component
    Contact.jsx         # FormSubmit contact form
    Footer.jsx          # three-column footer
server.js               # Express + Nodemailer backend (inactive, not wired)
```

## Key design tokens (src/index.css @theme)

- `--color-accent`: `#00FF9D` (neon green)
- `--color-accent-2`: `#00B8FF` (neon blue)
- `--color-muted`: `#9FB8AC`
- `--font-sans`: CentraNo2
- `--font-mono`: JetBrains Mono

Use these as Tailwind utilities: `text-accent`, `bg-accent/10`, `border-accent-2`, etc.

## Contact form

Uses [FormSubmit.co](https://formsubmit.co/) — no backend needed. Submissions go to `basnetprem524@gmail.com`. The `_next` redirect points to `https://basnetprem.com.np/thank-you.html` (change this if deploying to a different domain).

## User preferences

- Keep the dark cybersecurity aesthetic (neon green + blue on dark backgrounds)
- Preserve all personal content exactly (name, roles, experience, certifications)
- Stack: Vite + React 19 + Tailwind v4 + Framer Motion (do not revert to CRA or Bootstrap)

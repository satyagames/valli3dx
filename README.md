# Valli 3DX — Premium 3D Printed Gifts Marketing Site

A responsive, modern Next.js marketing website for Valli 3DX, showcasing premium 3D‑printed gifts for corporate gifting, limited editions, and event agencies.

**Live Site:** https://valli3dx.vercel.app

---

## 📋 Table of Contents
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
  - [Windows](#windows-setup)
  - [Mac](#mac-setup)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing & Git Workflow](#contributing--git-workflow)

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16** (App Router) — modern React framework with built-in optimizations
- **React 19** — latest React for hooks, state management, and components
- **TypeScript** — type-safe development

### Styling & UI
- **Tailwind CSS 4.x** — utility-first CSS framework
- **PostCSS** — CSS preprocessor with Autoprefixer
- **class-variance-authority (cva)** — component variant management
- **clsx & tailwind-merge** — smart class merging utilities
- **Radix UI** — unstyled, accessible component primitives
  - Dialogs, Buttons, Carousels, Tooltips, Forms, etc.

### Carousel & Media
- **Embla Carousel 8.x** — lightweight carousel library
- **Embla Autoplay Plugin** — automatic carousel rotation
- Images: unoptimized for simplicity (plain `<img />` tags)

### Forms & Data Validation
- **React Hook Form** — lightweight form state management
- **Zod** — TypeScript-first schema validation
- **@hookform/resolvers** — Zod integration for React Hook Form

### Additional Libraries
- **next-themes** — dark/light mode support
- **lucide-react** — icon library
- **sonner** — toast notifications
- **react-day-picker** — date picker UI
- **recharts** — charting library (included, optional use)
- **vaul** — drawer component
- **react-resizable-panels** — resizable panel layouts (optional)

### Package Manager & Build
- **pnpm** — fast, efficient package manager (recommended)
- **Node.js 18+** — JavaScript runtime
- **npm** — fallback package manager (Vercel uses npm for install)

### Analytics & Monitoring
- **@vercel/analytics** — Vercel Web Analytics (built-in)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18.x or 20.x** — [Download](https://nodejs.org/)
- **Git** — [Download](https://git-scm.com/)
- **GitHub account** — [Sign up](https://github.com/signup)
- **Text editor** — VS Code recommended — [Download](https://code.visualstudio.com/)

---

## Windows Setup

### 1) Clone the Repository

```powershell
git clone https://github.com/satyagames/valli3dx.git
cd valli3dx
```

### 2) Install Node (if not already installed)

- Download Node.js 18 LTS from https://nodejs.org/
- Run the installer and follow the prompts
- Verify installation:

```powershell
node -v
npm -v
```

### 3) Install Dependencies

Use npm (simplest on Windows/Vercel):

```powershell
npm install
```

Or if you prefer pnpm:

```powershell
npm install -g pnpm@latest
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
```

### 4) Start Development Server

```powershell
npm run dev
```

Output will show: `ready - started server on 0.0.0.0:3000, url: http://localhost:3000`

Open http://localhost:3000 in your browser. Changes auto-reload as you edit.

### 5) Lint & Type Check

```powershell
npm run lint
npm run build
```

---

## Mac Setup

### 1) Clone the Repository

```bash
git clone https://github.com/satyagames/valli3dx.git
cd valli3dx
```

### 2) Install Node (if not already installed)

Using Homebrew (easiest):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node@18
```

Or download from https://nodejs.org/

Verify:

```bash
node -v
npm -v
```

### 3) Install Dependencies

Use npm (simplest):

```bash
npm install
```

Or with pnpm:

```bash
npm install -g pnpm@latest
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
```

### 4) Start Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser. Changes auto-reload.

### 5) Lint & Type Check

```bash
npm run lint
npm run build
```

Quick start (developer)
Open the project folder in VS Code and run these commands in PowerShell (integrated terminal):

```powershell
# Optionally enable corepack and prepare pnpm (modern Node)
corepack enable
corepack prepare pnpm@latest --activate

pnpm install
pnpm dev

---

## 💻 Development

### Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # Lint code (ESLint)
npm exec tsc --noEmit  # Type check (TypeScript)
```

### Project Structure

```
valli3dx/
├── app/                      # Next.js App Router (server components by default)
│   ├── layout.tsx            # Root layout with metadata & fonts
│   ├── page.tsx              # Home page (composes all sections)
│   └── globals.css           # Global Tailwind styles
├── components/               # React components
│   ├── hero.tsx              # Hero section with carousel
│   ├── header.tsx            # Navigation header
│   ├── footer.tsx            # Footer with links & modals
│   ├── services.tsx          # Service cards
│   ├── cta-section.tsx       # Call-to-action section
│   ├── theme-provider.tsx    # Dark/light mode setup
│   └── ui/                   # Low-level UI primitives (Radix wrappers)
│       ├── button.tsx        # Button with variants (cva)
│       ├── dialog.tsx        # Modal dialog
│       ├── carousel.tsx      # Carousel container
│       └── ... other primitives
├── lib/
│   └── utils.ts              # Helper functions (cn, merge classes)
├── public/
│   ├── images/               # Product images for carousel
│   ├── icon.svg              # Favicon
│   └── apple-icon.png        # Apple touch icon
├── styles/
│   └── globals.css           # Tailwind @directives & globals
├── .github/
│   ├── copilot-instructions.md  # AI agent guidelines
│   └── workflows/
│       └── ci.yml            # GitHub Actions CI (lint, type-check, build)
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind theming & plugins
├── postcss.config.mjs        # PostCSS with Tailwind
├── .nvmrc                    # Node version (18)
└── README.md                 # This file
```

### Important Files

- **`app/page.tsx`** — Main page; import components and compose the landing
- **`components/hero.tsx`** — Update carousel images here
- **`next.config.mjs`** — Build settings (TS errors ignored, images unoptimized)
- **`tailwind.config.ts`** — Theme colors and Tailwind extensions
- **`lib/utils.ts`** — The `cn()` helper for class merging

### Coding Conventions

1. **Server vs Client Components**
   - Default: server components (no hooks, no state)
   - Add `"use client"` at top for client interactivity

2. **Styling**
   - Use Tailwind classes
   - Use `cn(...)` from `lib/utils.ts` to merge classes
   - Follow cva patterns in `components/ui/button.tsx`

3. **Imports**
   - Use absolute imports: `import X from '@/components/x'`
   - `@/` is configured in `tsconfig.json`

4. **Components**
   - Reuse UI primitives from `components/ui/`
   - Don't create raw `<div>` + inline classes; use primitives

---

## 📤 Deployment

This site is deployed to **Vercel** and auto-updates on every push to `main`.

### First-Time Deployment (Manual, one-time)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Select the `valli3dx` repository
5. Vercel detects Next.js automatically
6. Confirm build settings:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Node Version:** `18.x`
7. Click "Deploy"

After ~2–3 minutes, your site is live at https://valli3dx.vercel.app

### Automatic Deployments (after every push)

- **Main branch:** production deployment
- **Pull requests:** preview deployment (auto-deleted after PR closes)
- **GitHub Actions:** runs lint + type-check on every PR (via `.github/workflows/ci.yml`)

---

## 🔄 Contributing & Git Workflow

### Making Changes & Pushing to GitHub (Which auto-deploys to Vercel)

#### Windows Workflow

```powershell
# 1. Start dev server
npm run dev

# 2. Make changes (edit files, see live reload)
#    Press Ctrl+C to stop when ready

# 3. Verify changes
npm run lint
npm run build

# 4. Stage, commit, and push
git add .
git commit -m "Add feature: description of changes"
git push origin main

# 5. Wait ~2–3 minutes and visit https://valli3dx.vercel.app
```

#### Mac Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Make changes (edit files, see live reload)
#    Press Ctrl+C to stop when ready

# 3. Verify changes
npm run lint
npm run build

# 4. Stage, commit, and push
git add .
git commit -m "Add feature: description of changes"
git push origin main

# 5. Wait ~2–3 minutes and visit https://valli3dx.vercel.app
```

### Common Git Commands

```bash
# Check git status
git status

# View changes
git diff

# Add specific file
git add components/hero.tsx

# Commit
git commit -m "Update hero section"

# Push
git push origin main

# Pull latest changes
git pull origin main
```

### GitHub Setup (First Time)

```bash
# Clone repo
git clone https://github.com/satyagames/valli3dx.git

# Configure git (one-time)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Now you can commit & push
```

---

## 🔐 Important Notes

- **Never commit `node_modules/`** — it's in `.gitignore`
- **TypeScript:** `next.config.mjs` ignores build errors; run `npm exec tsc --noEmit` locally to catch them
- **Images:** Unoptimized by default (change in `next.config.mjs` if you enable Vercel Image Optimization)
- **Environment Variables:** None needed for this site; add to `.env.local` if required

---

## 📞 Support

- WhatsApp: https://wa.me/918712701185
- Instagram: https://www.instagram.com/valli3dx/
- Email: valli3dx@gmail.com

---

## 📝 License & Credits

© 2026 Valli 3DX. All rights reserved.

Built with Next.js, React, Tailwind CSS, and hosted on Vercel.

# valli3dx

A small marketing site / landing page for Valli 3DX — a business that provides premium 3D‑printed gifts for corporate gifting, limited editions, and events.

This repository is a Next.js (App Router) + TypeScript project with Tailwind CSS for styling and a set of reusable UI primitives under `components/ui/`.

Quick links
- Root layout: `app/layout.tsx`
- Main page: `app/page.tsx`
- UI primitives: `components/ui/` (Button, Dialog, Carousel, etc.)
- Global helpers: `lib/utils.ts` (`cn` helper)

Tech stack
- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS + PostCSS
- Radix UI primitives, `class-variance-authority` (cva), `clsx`, `tailwind-merge`
- Carousel: `embla-carousel` + autoplay plugin

Prerequisites
- Node.js 18+ recommended
- pnpm (preferred) — the repo contains a `pnpm-lock.yaml`

Quick start (developer)
Open the project folder in VS Code and run these commands in PowerShell (integrated terminal):

```powershell
# Optionally enable corepack and prepare pnpm (modern Node)
corepack enable
corepack prepare pnpm@latest --activate

pnpm install
pnpm dev
```

Then open http://localhost:3000 in your browser. The dev server supports hot reload.

If `corepack` or `pnpm` is not available you can install pnpm globally as a fallback:

```powershell
npm install -g pnpm@latest
pnpm -v
```

Build & production preview

```powershell
pnpm build
pnpm start
```

Lint & type checks

```powershell
pnpm lint
pnpm exec tsc --noEmit
```

Notes about runtime and CI
- `next.config.mjs` sets `typescript.ignoreBuildErrors = true`. The Next build will not fail on TypeScript errors in this configuration. Run `pnpm exec tsc --noEmit` and `pnpm lint` locally or in CI to enforce types and style.
- Images are served using plain `<img src="/..." />` because `images.unoptimized = true` in `next.config.mjs`.

Project conventions (important for contributors)
- App router / server vs client components: Files inside `app/` are server components by default. Add `"use client"` to the top of a file when you need client-side state, hooks, or DOM APIs.
- Use absolute imports with the `@/` alias (configured in `tsconfig.json`). Example: `import { Button } from '@/components/ui/button'`.
- Reuse existing UI primitives in `components/ui/` instead of adding ad‑hoc markup and classes. Primitives use `cva` + `cn(...)` (see `components/ui/button.tsx`).
- Styling: use Tailwind utility classes and the `cn(...)` helper from `lib/utils.ts` to combine classes safely.

Folder overview
- `app/` — Next.js App Router pages & layouts (server components by default)
- `components/` — page-level and UI components
- `components/ui/` — low-level primitives (Radix wrappers, cva patterns)
- `lib/` — small helpers (e.g., `cn`)
- `public/images/` — static images used by the Hero carousel and pages
- `styles/` & `app/globals.css` — Tailwind globals

Common tasks
- Add a new page or section: create a server component in `app/` (or a client component with `"use client"`).
- Add a new UI primitive: add in `components/ui/`, follow `cva` variant patterns and export `cn(...)` merged classnames.
- Update the Hero carousel images: add files to `public/images/` and update `components/hero.tsx`'s `carouselItems` array.

Where to look when you need examples
- `components/hero.tsx` — carousel usage with `embla-carousel` and Autoplay plugin.
- `components/header.tsx` — header layout and external links (WhatsApp/Instagram buttons).
- `components/footer.tsx` — support modals (Shipping/Privacy/Terms) and footer content.

Deployment
- The site is ready to deploy to Vercel or any Node hosting that supports Next.js. No special build environment variables are required by default.

Deploying to Vercel (recommended)

1) Import repository
- Sign in to Vercel and import the Git repository.
- Choose the project name `valli3dx` (this typically gives `valli3dx.vercel.app` if available).

2) Vercel project settings
- Framework Preset: Next.js (auto-detected)
- Root Directory: (leave blank for project root)
- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Environment variables: none required by default

3) Make the repo deployment-friendly (optional but recommended)
- Add `.nvmrc` with a Node version (e.g., `18`) so contributors and CI use the same Node.
- Add `packageManager` to `package.json` to pin pnpm, e.g.:

```json
"packageManager": "pnpm@8"
```

- These help Vercel and CI use the correct Node and package manager automatically.

4) CI / PR checks (recommended)
- Let Vercel handle deployments, but add a GitHub Actions workflow to run lint/type checks on PRs. Example workflow (add to `.github/workflows/ci.yml`):

```yaml
name: CI
on:
	pull_request:
	push:
		branches: [ main ]

jobs:
	checks:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- name: Use Node.js
				uses: actions/setup-node@v4
				with:
					node-version: '18'
					cache: 'pnpm'
			- name: Enable corepack & pnpm
				run: |
					corepack enable
					corepack prepare pnpm@latest --activate
			- name: Install dependencies
				run: pnpm install
			- name: Lint
				run: pnpm lint
			- name: Type check
				run: pnpm exec tsc --noEmit
			- name: Build (optional for PRs)
				if: github.ref == 'refs/heads/main'
				run: pnpm build
```

5) Notes & tips
- Do NOT add a custom Webpack config — Next handles bundling and Vercel is optimized for Next.js.
- `next.config.mjs` currently sets `typescript.ignoreBuildErrors = true`. Keep local/CI type checks enabled (`pnpm exec tsc --noEmit`) to catch errors before merging.
- If you want static image optimizations on Vercel, consider enabling Next Image optimizations (remove `images.unoptimized = true`) and test the impact.

6) After import
- Vercel will create preview deployments for PRs and production deployments for merges to `main`.
- Verify `https://valli3dx.vercel.app` after the first successful deployment.


Security & licenses
- Do not modify third-party license headers found in build outputs or `node_modules` — those are required by their licenses.

Contact / next steps
- If you want me to add: a VS Code launch config, CI workflow, pinned Node version file (`.nvmrc`), or a production-ready deployment guide, ask and I can add it.

---
Generated/maintained by the repository maintainers.

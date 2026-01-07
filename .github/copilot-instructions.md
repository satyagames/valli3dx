<!--
  Purpose: Help AI coding agents get productive quickly in this repository.
  Keep this short (20-50 lines), actionable, and specific to files and patterns
  discovered in the repo.
-->
# Copilot / AI agent instructions — valli3dx

Quick snapshot
- Next.js (app router) TypeScript project located under `app/` (server components by default).
- UI is split: page-level components live in `components/` and low-level primitives in `components/ui/`.
- Uses Tailwind/PostCSS and Radix UI primitives. Styling helpers: `class-variance-authority` (cva) and `lib/utils.ts`'s `cn` wrapper.
- Package manager lockfile: `pnpm-lock.yaml` — prefer `pnpm` for installs and scripts.

Important files to consult
- `app/layout.tsx` — root layout, global fonts and analytics.
- `app/page.tsx` — main page composition (Header, Hero, Services, CTASection, Footer).
- `components/theme-provider.tsx` — uses `next-themes`; note "use client" is required for client-only providers.
- `components/ui/*.tsx` — UI primitives (Button, Dialog, Carousel, etc.) following cva + `cn` patterns.
- `lib/utils.ts` — `cn(...)` helper combines `clsx` + `tailwind-merge`.
- `next.config.mjs` — images are `unoptimized: true` and TypeScript build errors are ignored in config.
- `postcss.config.mjs` and `styles/globals.css` — Tailwind integration.

Repo-specific patterns and conventions
- App router / server vs client components: Files under `app/` are server components unless they include `"use client"` at top. Follow that pattern when moving logic to client-side (hooks, state, DOM APIs).
- Absolute import alias `@/...` is configured in `tsconfig.json` (`paths`) — prefer imports like `import { X } from '@/components/x'`.
- UI primitives in `components/ui/` are designed to be composable and accept `asChild` slots. Check `button.tsx` to see `cva` variant usage.
- Styling: use `cn(...)` from `lib/utils.ts` to merge conditional classes and `buttonVariants` (cva) patterns for consistent class shape.
- External packages used heavily: Radix UI, lucide-react, embla-carousel, next-themes, sonner (toast). Search `components/ui` when adding UI features.

Developer workflows (commands)
Use the repo scripts from `package.json`; pnpm is preferred because of `pnpm-lock.yaml`.

Windows PowerShell examples:
```powershell
pnpm install
pnpm dev       # run Next.js in development
pnpm build     # production build
pnpm start     # run build output
pnpm lint      # run ESLint
```

Notes about build and runtime
- Next is pinned to `next@16` and React 19 — be careful when adding third-party packages; test them locally.
- `next.config.mjs` sets `typescript.ignoreBuildErrors = true` — CI or PR reviews should not rely on Next to block TS errors. Prefer keeping type-safety locally and on PRs.
- Images are not optimized by Next (see `images.unoptimized`) so uses plain `<img src="/..."/>` in many components (see `Hero` carousel).

What AI agents should do first when modifying UI or pages
1. Open `app/page.tsx` and `components/*` that compose it to understand the data flow.
2. Use `components/ui/*` primitives instead of creating new raw DOM elements — follow existing `cva` and `cn` patterns.
3. If client-side interactivity is required, add `"use client"` at the top of the component and keep it minimal.
4. Run `pnpm dev` locally to check behavior; run `pnpm lint` to catch stylistic issues.

Where to look for examples
- `components/hero.tsx` — carousel usage, client plugin initialization, images from `/public/images`.
- `components/header.tsx` — header layout, external links, and `Button` usage.

If uncertain, ask the developer for:
- preferred Node/pnpm version if you need to change lockfiles or CI settings.
- whether to enforce TypeScript errors in CI (since `next.config.mjs` currently ignores them).

End of file

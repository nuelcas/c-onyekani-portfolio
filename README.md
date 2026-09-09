# Casmir Onyekani Portfolio

A standalone portfolio for Casmir Onyekani, Software Engineer & Technical Writer.

## Stack

- React
- TypeScript
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS v4
- Radix UI primitives
- Lucide React
- Netlify adapter for TanStack Start

## Local development

Requires Node.js 22 LTS or a current supported Node.js release.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

## Updating portfolio content

Most portfolio content is centralized in `src/lib/portfolio-data.ts`.

Update these arrays when adding or changing work:

- `projects` — project title, category, description, status, tags, and URL.
- `publications` — article title, summary, category, platform, tags, and URL.
- `capabilities` — service/capability descriptions.
- `stackGroups` — technical skills.

### Profile photo

Replace `src/assets/official-headshot.jpg` with your real image, then update the import in `src/routes/about.tsx` to the new local asset. Prefer a compressed WebP or JPEG around 400–800px square. Keep the existing `alt` text accurate.

### Project images

If a project needs an image, add it to the existing assets area and reference it locally. Do not hotlink private or temporary asset-hosting URLs.

### Publications

Add the exact article URL to the relevant `url` field in `src/lib/portfolio-data.ts`. Do not invent publication URLs or statistics.

## Forms

The contact form currently uses Netlify Forms attributes. Keep those attributes if the site is deployed on Netlify. Do not put API keys, SMTP credentials, or other secrets in client-side code.

## Before publishing

```bash
npm run lint
npm run build
```

Then inspect the site locally with `npm run dev` or `npm run preview` and test navigation, the contact form, external links, images, and mobile layouts.

## Security basics

- Keep credentials and API keys out of source files.
- Browser-visible environment variables must be treated as public.
- Review third-party URLs before adding them to the site.
- Keep dependency installation and security audits under your control.
- Run `npm audit` after installing dependencies and after dependency upgrades.

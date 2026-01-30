# Portfolio — Documentation

Technical and usage documentation for the portfolio project.

---

## Overview

Single-page portfolio for **Solution Architect & Product Manager** in AI, Data & Software. Built with Next.js (App Router), TypeScript, and Tailwind CSS, using a custom Coolors-based color palette.

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ------------------------------------ |
| Framework    | Next.js 14 (App Router)              |
| Language     | TypeScript                           |
| Styling      | Tailwind CSS                         |
| Linting      | ESLint (Next + Prettier)             |
| Formatting   | Prettier                             |
| Testing      | Jest + React Testing Library        |

---

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles + Tailwind
│   │   ├── layout.tsx       # Root layout (Header, Footer, metadata)
│   │   └── page.tsx         # Main page (sections composition)
│   └── components/
│       ├── Header.tsx       # Sticky nav (Home, About, Projects, Contact)
│       ├── Header.test.tsx
│       ├── Footer.tsx       # Footer nav + copyright
│       └── sections/
│           ├── HomeSection.tsx
│           ├── HomeSection.test.tsx
│           ├── AboutSection.tsx
│           ├── AboutSection.test.tsx
│           ├── ProjectsSection.tsx
│           ├── ProjectsSection.test.tsx
│           ├── ContactSection.tsx
│           └── ContactSection.test.tsx
├── tailwind.config.ts       # Theme + palette
├── jest.config.js           # Jest + Next integration
├── jest.setup.js            # Testing Library setup
├── .eslintrc.json
├── .prettierrc
└── DOCS.md                  # This file
```

---

## Color Palette

Palette from [Coolors](https://coolors.co/palette/e0fbfc-c2dfe3-9db4c0-5c6b73-253237):

| Token           | Hex       | Usage (examples)        |
| --------------- | --------- | ----------------------- |
| `palette-light` | `#e0fbfc` | Page background, cards  |
| `palette-light-muted` | `#c2dfe3` | Sections, borders |
| `palette-muted` | `#9db4c0` | Tags, secondary text    |
| `palette-dark`  | `#5c6b73` | Body text, hover states |
| `palette-dark-deep` | `#253237` | Headings, buttons, footer |

Defined in:

- **Tailwind:** `tailwind.config.ts` → `theme.extend.colors.palette`
- **CSS variables:** `src/app/globals.css` → `:root`

---

## Sections

### Home (`#home`)

- Hero heading: “Solution Architect & Product Manager”
- Tagline: “AI, Data & Software”
- CTA button linking to `#contact`

### About (`#about`)

- Short professional summary
- Focus on architecture, product, AI/data, and software

### Projects (`#projects`)

- Grid of project cards (titles, descriptions, tags)
- Edit list in `src/components/sections/ProjectsSection.tsx`

### Contact (`#contact`)

- **Email:** `mailto:` link (configurable in component)
- **LinkedIn:** External link + icon (configurable)
- **Form:** Name, Email, Message; submits via [Web3Forms](https://web3forms.com). Requires `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (see [Configuration](#configuration)).

---

## Configuration

### Contact details

In `src/components/sections/ContactSection.tsx`:

```ts
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";
const EMAIL = "your.email@example.com";
```

Update these to your real profile and email.

### Web3Forms (contact form)

The contact form posts to [Web3Forms](https://web3forms.com). **Do not commit your access key.**

1. Get an access key at [web3forms.com](https://web3forms.com).
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key` in `.env.local`.

`.env.local` is gitignored. If the key is missing or invalid, the form shows an error and suggests using the email link instead.

**For deployment:** add the key as a secret or environment variable where the app is built:

- **Vercel:** Project → Settings → Environment Variables → add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- **Netlify:** Site → Site settings → Environment variables → add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- **GitHub Actions:** Repo → Settings → Secrets and variables → Actions → New repository secret (e.g. `WEB3FORMS_ACCESS_KEY`), then in your workflow set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: ${{ secrets.WEB3FORMS_ACCESS_KEY }}` in the build step env.

Do **not** put the key in the repo or in public config.

### Metadata

In `src/app/layout.tsx`:

```ts
export const metadata: Metadata = {
  title: "Portfolio | Solution Architect & Product Manager",
  description: "Professional portfolio — AI, Data & Software. ...",
};
```

Adjust title and description for SEO and sharing.

### Navigation

Header and footer links are defined in:

- `src/components/Header.tsx` → `navLinks`
- `src/components/Footer.tsx` → `navLinks`

Add or change entries there to update both.

---

## Scripts

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `npm run dev`        | Start dev server (localhost:3000) |
| `npm run build`      | Production build               |
| `npm run start`      | Run production server          |
| `npm run lint`       | Run ESLint                    |
| `npm run lint:fix`   | ESLint with auto-fix           |
| `npm run format`     | Prettier: format all           |
| `npm run format:check` | Prettier: check only         |
| `npm test`           | Run Jest tests                 |
| `npm run test:watch` | Jest in watch mode             |

---

## Linting & Formatting

- **ESLint:** `next/core-web-vitals` + Prettier (no style rules in ESLint). Config: `.eslintrc.json`.
- **Prettier:** `.prettierrc` (semi, singleQuote, tabWidth, etc.). Ignore list: `.prettierignore`.

Recommended: run `npm run lint` and `npm run format` (or `format:check`) before commits.

---

## Testing

- **Runner:** Jest (`jest.config.js`), with `next/jest` and `jest-environment-jsdom`.
- **Setup:** `jest.setup.js` imports `@testing-library/jest-dom`.
- **Path alias:** `@/*` → `./src/*` (same as Next.js).

Tests live next to components (`*.test.tsx`) and cover:

- Header: nav links and hrefs
- HomeSection: heading, tagline, CTA
- AboutSection: heading and key copy
- ProjectsSection: heading and project titles
- ContactSection: heading, mailto, LinkedIn, form fields, submit success

Run: `npm test` or `npm run test:watch`.

---

## Deployment

1. **Build:** `npm run build`
2. **Run:** `npm run start` (or use a platform that runs this after build)

Compatible with Vercel, Netlify, and other Node/static hosts that support Next.js.

---

## Customization Checklist

- [ ] Set `EMAIL` and `LINKEDIN_URL` in `ContactSection.tsx`
- [ ] Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (copy from `.env.example`)
- [ ] Update metadata in `layout.tsx`
- [ ] Edit copy in `HomeSection`, `AboutSection`, `ProjectsSection`
- [ ] Adjust project list and tags in `ProjectsSection.tsx`

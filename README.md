# Portfolio

Professional portfolio for **Solution Architect & Product Manager** — AI, Data & Software.

Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, using the [Coolors palette](https://coolors.co/palette/e0fbfc-c2dfe3-9db4c0-5c6b73-253237).

## Sections

- **Home** — Hero and tagline
- **About** — Background and focus areas
- **Projects** — Project highlights (AI, Product, Software)
- **Contact** — Form, email (mailto) link, and LinkedIn icon

## Setup

```bash
npm install
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check Prettier |
| `npm test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |

## Linters & formatters

- **ESLint** — `next/core-web-vitals` + Prettier
- **Prettier** — Code formatting (`.prettierrc`)

## Tests

- **Jest** + **React Testing Library** — Component tests in `*.test.tsx`

## Customize

- **Email / LinkedIn** — Edit `EMAIL` and `LINKEDIN_URL` in `src/components/sections/ContactSection.tsx`.
- **Contact form** — Uses [Web3Forms](https://web3forms.com). Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (do not commit `.env.local`).
- **Palette** — Colors are in `tailwind.config.ts` and `src/app/globals.css` (Coolors palette).

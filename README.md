# Portfolio FullStack

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router, TypeScript, Tailwind CSS). Deploy on [Vercel](https://vercel.com) by importing this GitHub repo.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (full stack)

Messages post to `POST /api/contact`, which sends email via [Resend](https://resend.com).

1. Create a Resend account and an API key.
2. Copy `.env.example` to `.env.local` for local testing.
3. In Vercel: **Project → Settings → Environment Variables**, add:
   - `RESEND_API_KEY` — your Resend secret
   - `CONTACT_TO_EMAIL` — inbox that receives submissions
   - `RESEND_FROM` (optional) — e.g. `Portfolio <onboarding@resend.dev>` for testing, or a verified domain sender for production ([Resend domains](https://resend.com/docs/dashboard/domains/introduction))

Redeploy after changing env vars.

## Production

```bash
npm run build
npm run start
```

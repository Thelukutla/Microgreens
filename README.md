# GreenSprout Naturals

A production-ready eCommerce storefront for a premium microgreens business built with Next.js, TypeScript, Tailwind, Prisma, and PostgreSQL.

## Features
- Premium storefront for fresh microgreens and powders
- Product catalog, detail pages, subscriptions, cart, checkout, and blog pages
- SEO metadata, sitemap, and robots configuration
- Prisma schema for users, products, orders, payments, reviews, coupons, subscriptions, and inventory
- Responsive UI with premium organic styling and animation

## Tech Stack
- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Framer Motion
- Lucide icons

## Project Structure
- `src/app` — pages, routes, and metadata
- `src/components` — reusable UI and layout components
- `src/lib` — static data and helper utilities
- `prisma` — database schema and migrations

## Development
```bash
npm install
npm run dev
```

## Environment Variables
Create a `.env` file with:
```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
SHIPROCKET_API_KEY=your_shiprocket_key
SHIPROCKET_API_SECRET=your_shiprocket_secret
```

## Database Setup
```bash
npx prisma generate
npx prisma migrate dev --name init
```

## Local Production Preview
```bash
npm run build
npm run start
```

## Deployment Guide (Vercel)
1. Push the repository to GitHub.
2. Create a new project in Vercel and import the repo.
3. Set the environment variables listed above in Vercel.
4. Choose the root directory and deploy.
5. Vercel will provide a live production URL such as `https://your-project.vercel.app`.
6. For a custom domain, add it in the Vercel dashboard and configure DNS.

## Sample Data Notes
- Product catalog and subscription content are defined in [src/lib/data.ts](src/lib/data.ts)
- Prisma models cover core commerce flows for orders, payments, reviews, and subscriptions

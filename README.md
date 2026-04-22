<div align="center">

# ⛳ GolfGives

### A charity golf tournament fundraising platform

**Built with Next.js 15 · TypeScript · Prisma · Supabase · Clerk · Deployed on Vercel**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

<br/>

**[→ View Live Demo](https://golfgives-sand.vercel.app/)**

</div>

---

## Overview

GolfGives is a full-stack web platform for managing charity golf tournament fundraising. Organizers create and publish events, participants register and donate, and everything is tracked through a centralized dashboard — no spreadsheets, no manual follow-ups.

Most charity golf events are still managed through email chains and shared docs. GolfGives replaces that with a structured platform: event creation, public discovery, donation tracking, and an admin panel, all in one place.

The app is live, connected to a real PostgreSQL database, and handles authentication, protected routes, and form submissions in production.

---

## Features

| | Feature | Description |
|:---:|:---|:---|
| 🏌️ | **Event Creation** | Organizers create tournaments with full details, dates, and linked charities |
| 🔍 | **Public Discovery** | Anyone can browse and explore upcoming charity golf events |
| 📊 | **Organizer Dashboard** | Manage your events, track registrations, and monitor activity |
| 💸 | **Donation Flow** | Structured workflow connecting donors to the charity behind each event |
| 🤝 | **Charity Linking** | Events are tied to specific charities, giving donors clear context |
| 🔐 | **Authentication** | Clerk-powered auth with protected routes, middleware, and role handling |
| 📱 | **Responsive UI** | Fully mobile-friendly — built with Tailwind CSS from the ground up |
| 🛡️ | **Admin Panel** | Platform-level controls for managing events and users |

---

## Tech Stack

| Layer | Technology | Notes |
|:---|:---|:---|
| Framework | Next.js 15 (App Router) | SSR, React Server Components, server actions |
| Language | TypeScript | Strict types across the full stack |
| Styling | Tailwind CSS | Utility-first, responsive by default |
| Auth | Clerk | Middleware-based route protection, session management |
| ORM | Prisma | Schema-first, type-safe database access |
| Database | Supabase PostgreSQL | Managed cloud Postgres with connection pooling |
| Deployment | Vercel | CI/CD, environment management, preview deployments |

---

## Architecture

```
  Browser
     │
     ▼
  Vercel Edge
  ┌──────────────────────────────────────┐
  │         Next.js 15 App               │
  │                                      │
  │   App Router (RSC + Client)          │
  │          │                           │
  │   Clerk Middleware                   │
  │   (route protection, sessions)       │
  │          │                           │
  │   Server Actions / API Routes        │
  │          │                           │
  │   Prisma ORM                         │
  └──────────┼───────────────────────────┘
             │
             ▼
  Supabase PostgreSQL (cloud)
```

The frontend and backend run together inside the Next.js app. Clerk sits at the middleware layer and handles all auth before requests reach any route. Prisma manages all database communication, and Supabase hosts the PostgreSQL instance.

---

## Pages

| Route | Description |
|:---|:---|
| `/` | Landing page with platform overview and event highlights |
| `/events` | Public event discovery — browse all active charity tournaments |
| `/events/[id]` | Individual event detail page with charity info and donation options |
| `/create-event` | Protected — organizers create and publish new tournaments |
| `/dashboard` | Protected — manage your events, view registrations and stats |
| `/admin` | Protected — platform-wide admin controls |
| `/sign-in`, `/sign-up` | Clerk-handled authentication pages |

---

## Challenges Solved

**Clerk middleware with Next.js 15 App Router**
Getting `clerkMiddleware` to correctly distinguish between public and protected routes took some trial and error. The App Router handles routing differently from the Pages Router, and the middleware config needs to be precise — especially for API routes that should stay publicly accessible.

**Prisma in a serverless environment**
Prisma's default client setup doesn't work cleanly in serverless functions — you end up with too many open database connections. The fix was using a singleton pattern to reuse the Prisma client across hot reloads in development and across function invocations in production.

**Supabase connection pooling**
Supabase requires using a pooled connection string (via PgBouncer) for serverless deployments, not the direct connection. Figuring this out fixed intermittent connection errors that were hard to reproduce locally.

**Environment variables across deployments**
Managing separate `.env.local`, preview, and production environments on Vercel without leaking secrets or breaking builds required careful attention to which variables are public (`NEXT_PUBLIC_`) and which are server-only.

**Server/client component boundaries**
React Server Components in Next.js 15 have strict rules about what can be passed between server and client. Several hydration errors came from crossing that boundary incorrectly — fixing them improved both correctness and performance.

---

## Local Setup

**Prerequisites:** Node.js 18+, a Supabase project, and a Clerk application.

```bash
# Clone and install
git clone https://github.com/VikashITB/golfgives.git
cd golfgives
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in the required values (see below)

# Set up the database
npx prisma generate
npx prisma db push

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database
DATABASE_URL=            # Supabase pooled connection string

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> Never commit `.env.local`. In production, all secrets are stored as Vercel environment variables.

---

## Folder Structure

```
golfgives/
├── app/
│   ├── (auth)/               # Sign-in and sign-up routes (Clerk)
│   ├── (root)/
│   │   ├── dashboard/        # Organizer dashboard
│   │   ├── events/           # Event listing and detail pages
│   │   ├── create-event/     # Event creation form
│   │   └── admin/            # Admin panel
│   ├── api/                  # API route handlers
│   ├── layout.tsx            # Root layout (ClerkProvider)
│   └── globals.css
├── components/
│   ├── ui/                   # Base UI components
│   ├── forms/                # Form components
│   └── shared/               # Navbar, footer, layout wrappers
├── lib/
│   ├── prisma.ts             # Prisma client singleton
│   ├── utils.ts              # Utility functions
│   └── actions/              # Server actions
├── prisma/
│   └── schema.prisma         # Database schema
├── types/                    # Shared TypeScript types
├── middleware.ts             # Clerk route protection
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Planned Improvements

- **Stripe payments** — process donations directly through the platform with receipts
- **Email notifications** — confirmation and reminder emails via Resend or SendGrid
- **Analytics** — per-event dashboards showing registrations, donations, and trends
- **Fundraising leaderboards** — team and individual rankings per tournament
- **PWA support** — installable on mobile with offline capability

---

## About

**Vikash Gupta** — Full Stack Developer

I built GolfGives as a complete product, not just a demo. That meant handling deployment configuration, debugging production-only issues, integrating third-party services, and shipping something that actually works end-to-end. The repo reflects what I can build independently — from schema design to a live URL.

[![GitHub](https://img.shields.io/badge/GitHub-VikashITB-181717?style=flat-square&logo=github)](https://github.com/VikashITB)

---

<div align="center">

⭐ If you found this useful or want to follow the project, a star is appreciated.

[![Star on GitHub](https://img.shields.io/github/stars/VikashITB/golfgives?style=social)](https://github.com/VikashITB/golfgives)

</div>

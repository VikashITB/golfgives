<div align="center">

<!-- LOGO / BANNER -->
<img src="https://readme-typing-svg.demolab.com?font=Syne&weight=700&size=42&pause=1000&color=16A34A&center=true&vCenter=true&width=600&lines=⛳+GolfGives" alt="GolfGives" />

### *Where Every Swing Drives Change*

**A production-ready charity golf tournament fundraising platform — built for nonprofits, event organizers, and donors who want more than a spreadsheet.**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk_Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-golfgives--sand.vercel.app-16A34A?style=for-the-badge)](https://golfgives-sand.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-VikashITB%2Fgolfgives-181717?style=for-the-badge&logo=github)](https://github.com/VikashITB/golfgives)

</div>

---

## 🌐 Live Demo

> **Try it live:** [https://golfgives-sand.vercel.app/](https://golfgives-sand.vercel.app/)

The platform is fully deployed on Vercel with a live Supabase PostgreSQL database. Create an account, explore charity events, and experience the full donation workflow end-to-end.

---

## 🧩 Problem Statement

Managing charity golf tournaments manually is a nightmare. Organizers juggle spreadsheets for registrations, chase donors over email, manually update participant lists, and have no centralized way to track fundraising progress — all while trying to run a real event.

**The result?** Lost donations, confused donors, overwhelmed organizers, and a fundraising experience that doesn't reflect the charity's professionalism.

**GolfGives fixes this.** It provides a purpose-built platform where charities can create and manage golf fundraising events, donors can discover and contribute to causes they care about, and organizers get a real-time dashboard — all in one place.

---

## 💡 Solution

GolfGives is a full-stack web platform that digitizes and streamlines every step of the charity golf fundraising lifecycle:

1. **Organizers** sign up, create a tournament, and publish it to the platform in minutes.
2. **Donors & Participants** discover public events, learn about the charity, and register or donate.
3. **Admins** manage all event data from a centralized dashboard with real-time visibility.
4. **Charity Partners** are linked to events, building trust and giving donors context.

The entire workflow — from event creation to donor engagement — is handled through a clean, responsive UI backed by a secure, scalable architecture.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🏌️ **Create Charity Golf Events** | Organizers can set up tournaments with details, charity links, and dates |
| 🔍 **Public Event Discovery** | Anyone can browse and explore upcoming charity golf events |
| 📊 **Dashboard Management** | Organizers get a personal dashboard to manage their events end-to-end |
| 💸 **Donation Workflows** | Structured donation flow connecting donors directly to charity causes |
| 🤝 **Charity Partnerships** | Events are linked to verified charities to establish credibility |
| 🔐 **Secure Authentication** | Clerk-powered auth with session management, middleware protection, and role handling |
| 📱 **Fully Responsive UI** | Mobile-first design using Tailwind CSS — works seamlessly on all screen sizes |
| 🛡️ **Admin Panel** | Administrative control layer for platform-level management and oversight |

---

## 📸 Screenshots

> *Screenshots coming soon — the live demo at [golfgives-sand.vercel.app](https://golfgives-sand.vercel.app/) is available for a full walkthrough.*

| View | Preview |
|---|---|
| 🏠 **Homepage / Landing** | `[ Screenshot Placeholder ]` |
| 📋 **Event Discovery Page** | `[ Screenshot Placeholder ]` |
| ➕ **Create Event Flow** | `[ Screenshot Placeholder ]` |
| 📊 **Organizer Dashboard** | `[ Screenshot Placeholder ]` |
| 💳 **Donation Workflow** | `[ Screenshot Placeholder ]` |
| 🛡️ **Admin Panel** | `[ Screenshot Placeholder ]` |
| 📱 **Mobile View** | `[ Screenshot Placeholder ]` |

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | Next.js 15 (App Router) | Full-stack React framework with SSR & RSC |
| **Language** | TypeScript | Type-safe development across the entire codebase |
| **Styling** | Tailwind CSS | Utility-first responsive design system |
| **Authentication** | Clerk | Auth middleware, session management, user roles |
| **ORM** | Prisma | Type-safe database queries and schema management |
| **Database** | Supabase PostgreSQL | Managed, scalable relational cloud database |
| **Hosting** | Vercel | CI/CD pipeline, edge deployment, environment management |

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                        │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
┌──────────────────────────▼──────────────────────────────────┐
│                    VERCEL EDGE NETWORK                        │
│  ┌─────────────────────────────────────────────────────┐    │
│  │               NEXT.JS 15 APPLICATION                  │    │
│  │                                                       │    │
│  │  ┌──────────────────┐   ┌────────────────────────┐  │    │
│  │  │  App Router (RSC) │   │  API Routes / Actions  │  │    │
│  │  │  Pages & Layouts  │   │  Server-side Logic     │  │    │
│  │  └────────┬─────────┘   └───────────┬────────────┘  │    │
│  │           │                         │                │    │
│  │  ┌────────▼─────────────────────────▼────────────┐  │    │
│  │  │              CLERK MIDDLEWARE                   │  │    │
│  │  │       Route Protection & Session Handling       │  │    │
│  │  └──────────────────────┬────────────────────────┘  │    │
│  │                         │                            │    │
│  │  ┌──────────────────────▼────────────────────────┐  │    │
│  │  │               PRISMA ORM                        │  │    │
│  │  │         Schema · Queries · Migrations           │  │    │
│  │  └──────────────────────┬────────────────────────┘  │    │
│  └─────────────────────────┼────────────────────────────┘   │
└─────────────────────────────┼───────────────────────────────┘
                              │ PostgreSQL Protocol
┌─────────────────────────────▼───────────────────────────────┐
│                  SUPABASE POSTGRESQL                          │
│           Hosted · Managed · Scalable Cloud DB               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Challenges Solved

Building GolfGives wasn't just about writing code — it was about solving real engineering problems in a production environment:

**1. Production Deployment on Vercel**
Configuring the Next.js App Router for production, handling build errors, managing environment variables securely across preview and production deployments, and ensuring zero-downtime rollouts.

**2. Clerk Authentication Middleware**
Integrating Clerk's middleware with Next.js 15's App Router required precise configuration of `clerkMiddleware`, protected route patterns, and public route exceptions — especially for API routes that need to remain accessible.

**3. Prisma + Supabase Integration**
Setting up Prisma with a remote Supabase PostgreSQL instance, handling connection pooling correctly for serverless environments, running migrations against a live database, and managing schema changes without data loss.

**4. Real-World Debugging**
Debugging issues that only surface in production — environment variable mismatches, cold start latency, Prisma client instantiation in serverless functions, and hydration errors from server/client component boundaries.

**5. Full-Stack Integration**
Stitching together authentication state, database queries, and UI in a cohesive way using React Server Components, server actions, and client components — ensuring data flows correctly without unnecessary re-renders or security leaks.

---

## 📚 What I Learned

Building GolfGives taught me what it actually means to ship a full-stack application:

- **Deployment is a feature.** Getting something running locally is step one — getting it running reliably in production, with real users, is a completely different skillset.
- **Type safety pays off.** TypeScript caught dozens of potential runtime bugs at compile time across Prisma models, API responses, and component props.
- **Auth is more than login.** Clerk's middleware layer changed how I think about access control — it's infrastructure, not an afterthought.
- **Database design matters early.** Prisma schema decisions made in day one had downstream effects on query complexity and performance.
- **Debugging production issues builds intuition** that local development never can — reading logs, tracing errors, and fixing issues under real constraints is the best teacher.

---

## 🚀 Local Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- A Supabase project (PostgreSQL)
- A Clerk application

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/VikashITB/golfgives.git
cd golfgives

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your values (see Environment Variables section below)

# 4. Push Prisma schema to your database
npx prisma db push

# 5. Generate Prisma client
npx prisma generate

# 6. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database (Supabase PostgreSQL)
DATABASE_URL=your_supabase_postgresql_connection_string

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ Never commit your `.env.local` file. All secrets are managed via Vercel environment variables in production.

---

## 📁 Folder Structure

```
golfgives/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Clerk auth routes (sign-in, sign-up)
│   ├── (root)/                   # Main application routes
│   │   ├── dashboard/            # Organizer dashboard
│   │   ├── events/               # Event discovery & detail pages
│   │   ├── create-event/         # Event creation flow
│   │   └── admin/                # Admin panel
│   ├── api/                      # API route handlers
│   ├── layout.tsx                # Root layout with ClerkProvider
│   └── globals.css               # Global styles
├── components/                   # Reusable UI components
│   ├── ui/                       # Base design system components
│   ├── forms/                    # Form components
│   └── shared/                   # Layout & navigation components
├── lib/                          # Utility functions & config
│   ├── prisma.ts                 # Prisma client singleton
│   ├── utils.ts                  # Shared helpers
│   └── actions/                  # Server actions
├── prisma/
│   └── schema.prisma             # Database schema
├── public/                       # Static assets
├── types/                        # TypeScript type definitions
├── middleware.ts                 # Clerk auth middleware
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 🔮 Future Improvements

| Feature | Description |
|---|---|
| 💳 **Payment Integration** | Stripe-powered donation processing with receipts and refund support |
| 📈 **Analytics Dashboard** | Event performance metrics, donor trends, and fundraising visualizations |
| 📧 **Email Automation** | Automated confirmation emails, reminders, and donor thank-you messages |
| 🗂️ **Enhanced Dashboards** | Richer data views for organizers — registrations, revenue, participant management |
| 🤖 **AI Recommendations** | Suggest relevant charity events to donors based on their interests and history |
| 🏆 **Leaderboards** | Gamified fundraising with team and individual donor leaderboards |
| 📱 **PWA Support** | Progressive Web App for offline access and native-like mobile experience |

---

## 👨‍💻 About the Developer

<div align="center">

**Vikash Gupta**

*Aspiring Software Engineer · Full Stack Developer · Problem Solver*

I build production-ready web applications that solve real problems — not just portfolio projects that look good in screenshots. GolfGives represents my approach to learning: pick a real use case, architect it properly, deploy it, and learn from everything that breaks.

[![GitHub](https://img.shields.io/badge/GitHub-VikashITB-181717?style=for-the-badge&logo=github)](https://github.com/VikashITB)

</div>

---

<div align="center">

---

*GolfGives is a real, deployed, full-stack application — not a tutorial clone.*
*Every line of code was written, debugged, and shipped by a single developer.*

**⭐ If this project impressed you, a star on the repo means a lot.**

[![Star on GitHub](https://img.shields.io/github/stars/VikashITB/golfgives?style=social)](https://github.com/VikashITB/golfgives)

</div>

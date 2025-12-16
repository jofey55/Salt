# SALT - Somali Americans Legal Taskforce

## Overview

SALT (Somali Americans Legal Taskforce Against ICE) is a community defense platform for Minnesota's Somali American community. The application provides resources for immigrant rights, raid alerts, volunteer coordination, and emergency preparedness. It's a full-stack TypeScript application with a React frontend and Express backend, designed for deployment on Railway or similar platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom build script (`script/build.ts`)
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin, using CSS-based theme configuration in `index.css`
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for development, esbuild for production bundling
- **API Design**: RESTful endpoints under `/api/` prefix
- **Static Serving**: Production builds serve compiled frontend from `dist/public`

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains all database tables
- **Tables**: 
  - `users` - Basic user authentication
  - `raid_reports` - Community-submitted ICE raid sightings
  - `volunteer_submissions` - Volunteer registration forms
- **Migrations**: Drizzle Kit with `drizzle-kit push` for schema sync

### Build Process
- **Important**: Always use `npm run build` (runs `script/build.ts`), never run `vite build` directly
- The build script handles both client (Vite) and server (esbuild) compilation
- Output goes to `dist/` with client assets in `dist/public` and server bundle as `dist/index.cjs`

### Path Aliases
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## External Dependencies

### Database
- PostgreSQL database required (configured via `DATABASE_URL` environment variable)
- Uses `connect-pg-simple` for session storage

### Third-Party Services
- **WhatsApp**: Community alert group integration (external link only)
- **Google Fonts**: Inter and Libre Baskerville font families

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit` - Database ORM and migrations
- `@tanstack/react-query` - Data fetching and caching
- `react-hook-form` / `@hookform/resolvers` - Form handling
- `zod` / `drizzle-zod` - Schema validation
- `wouter` - Client-side routing
- `react-qr-code` - QR code generation for WhatsApp links
- `date-fns` - Date formatting utilities

### Deployment
- Configured for Railway deployment (`railway.json`)
- Uses Nixpacks builder
- Start command: `npm start` (runs production server)
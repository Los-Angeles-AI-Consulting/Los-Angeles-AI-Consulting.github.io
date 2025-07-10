# Los Angeles AI Consulting Website

## Overview

This project is a modern, full-stack web application for Los Angeles AI Consulting, built with React, TypeScript, Express, and PostgreSQL. It features a professional business website with contact form functionality, modern UI components, and a robust backend API.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite for development and building
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL sessions
- **Email**: Nodemailer for contact form submissions

### Key Design Decisions
1. **Monorepo Structure**: Client, server, and shared code in one repository
2. **Type Safety**: Full TypeScript coverage with shared schemas
3. **Modern UI**: shadcn/ui components for consistent, accessible design
4. **Serverless-Ready**: Neon Database for PostgreSQL hosting
5. **Development Experience**: Hot reload with Vite integration

## Key Components

### Frontend Structure
- **Pages**: Home, Services, Clients, About, Contact, Playground
- **Components**: Reusable UI components with theme support
- **Hooks**: Custom hooks for mobile detection and toast notifications
- **Theming**: Light/dark mode support with CSS variables

### Backend Structure
- **Routes**: RESTful API endpoints for contact form and user management
- **Storage**: Abstracted storage layer with memory and database implementations
- **Email Service**: Automated email notifications for contact submissions
- **Middleware**: Request logging and error handling

### Shared Components
- **Schemas**: Zod validation schemas for type-safe data handling
- **Types**: Shared TypeScript types between client and server

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data validated with Zod schema
3. POST request to `/api/contact` endpoint
4. Server validates and stores submission in database
5. Email notification sent to business owner
6. Success/error response returned to client
7. User receives confirmation via toast notification

### User Management Flow
1. User data stored in PostgreSQL via Drizzle ORM
2. Memory storage fallback for development
3. Session management with PostgreSQL store

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI primitives for accessibility
- **Icons**: Lucide React and React Icons
- **Form Handling**: React Hook Form with Zod resolvers
- **HTTP Client**: Native fetch with TanStack Query
- **Date Handling**: date-fns for date formatting

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Email**: Nodemailer for SMTP email sending
- **Validation**: Zod for schema validation
- **Session Store**: connect-pg-simple for PostgreSQL sessions

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Code Quality**: ESLint, Prettier configurations
- **Development**: tsx for TypeScript execution
- **Database Tools**: Drizzle Kit for migrations

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **SMTP_HOST**: Email server configuration
- **SMTP_USER/SMTP_PASS**: Email authentication
- **NOTIFICATION_EMAIL**: Recipient for contact form notifications

### Production Considerations
1. **Database**: Configured for Neon PostgreSQL hosting
2. **Sessions**: PostgreSQL-backed session storage
3. **Static Files**: Vite-built assets served by Express
4. **Email**: SMTP configuration for production email sending
5. **Error Handling**: Comprehensive error catching and logging

### Development Setup
1. Clone repository
2. Install dependencies: `npm install`
3. Set DATABASE_URL environment variable
4. Run database migrations: `npm run db:push`
5. Start development server: `npm run dev`
6. Build for production: `npm run build`
7. Start production server: `npm start`

The application is structured for easy deployment to platforms like Replit, Vercel, or traditional hosting providers, with clear separation between development and production configurations.
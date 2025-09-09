# CAPLEO Sage Solutions - Calgary Consulting Website

## Overview

CAPLEO Sage Solutions is a modern full-stack web application for a Calgary-based consulting firm specializing in Data Engineering, Digital Transformation, and Design Enhancement services. The application features a professional website with service showcases, case studies, team information, blog content, and a contact form system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent design
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Language**: TypeScript with ESM modules throughout
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between client and server for consistent validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

### Development Setup
- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Custom Express server with Vite middleware integration
- **Hot Reload**: Vite HMR for instant development feedback
- **TypeScript**: Strict configuration with path mapping for clean imports

### Data Layer
The application uses a schema-first approach with shared TypeScript types:
- **Contact Management**: Contact form submissions with validation
- **Blog System**: Blog posts with publishing workflow and metadata
- **Testimonials**: Client testimonials with featured content support  
- **Case Studies**: Detailed project showcases with results and metrics
- **Database Schema**: Drizzle schema definitions with PostgreSQL-specific features

### UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI ensures WCAG compliance and keyboard navigation
- **Brand Colors**: Custom color palette with primary, secondary, and accent colors

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit with schema migrations
- **Drizzle Kit**: Database migration and schema management tools

### UI & Styling
- **Radix UI**: Headless UI primitives for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Typography with Inter, DM Sans, and Fira Code fonts

### Development Tools
- **Replit Integration**: Development environment with cartographer and error overlay plugins
- **React Helmet**: Document head management for SEO
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Component variant management system

### Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation with TypeScript integration
- **Hookform Resolvers**: Integration between React Hook Form and Zod

The application follows modern React patterns with a focus on type safety, performance, and maintainability. The shared schema approach ensures consistency between frontend and backend validation, while the component-based architecture allows for easy maintenance and feature expansion.
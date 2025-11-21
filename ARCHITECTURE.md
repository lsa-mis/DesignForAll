# Architecture Guide

This document explains the architecture and design decisions of Design for All.

## Overview

Design for All is a React-based single-page application built with Vite, TypeScript, and Tailwind CSS. It demonstrates accessibility principles through interactive "Amateur vs Pro" comparisons.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **react-syntax-highlighter** - Code syntax highlighting

## Project Structure

```
designforall/
├── .github/
│   ├── workflows/          # CI/CD workflows
│   ├── ISSUE_TEMPLATE/     # Issue templates
│   └── pull_request_template.md
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ComparisonCard.tsx    # Core comparison component
│   │   ├── Layout.tsx            # App shell with navigation
│   │   ├── forms/                # Form example components
│   │   ├── keyboard/             # Keyboard navigation examples
│   │   ├── links/                # Link examples
│   │   ├── color/                # Color examples
│   │   ├── structure/            # Structure examples
│   │   └── advanced/             # Advanced component examples
│   ├── pages/              # Page-level components
│   │   ├── Home.tsx         # Landing page
│   │   └── [Section]Section.tsx  # Individual section pages
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Key Components

### ComparisonCard

The core component that displays side-by-side comparisons. It includes:

- Toggle between "Amateur" and "Pro" modes
- Live component previews
- Design logic explanations
- Expandable code comparison
- Smooth animations

**Props:**
- `title` - Example title
- `description` - Brief description
- `designLogic` - Explanation of why the pro version is better
- `badCode` - Amateur code example (string)
- `goodCode` - Pro code example (string)
- `BadComponent` - Amateur React component
- `GoodComponent` - Pro React component
- `sectionNumber` - Section identifier

### Layout

The app shell that provides:

- Sidebar navigation (desktop)
- Mobile header with menu
- Dark mode toggle
- Consistent layout across pages

### Section Pages

Each section page follows this pattern:

1. Import example components (Amateur and Pro versions)
2. Define example data array with metadata
3. Map over examples to render ComparisonCard components

## Routing

Routes are defined in `App.tsx` using React Router:

- `/` - Home page
- `/section/[section-name]` - Individual sections

The `basename="/designforall"` is set for GitHub Pages deployment.

## Styling

### Tailwind CSS

We use Tailwind CSS utility classes for styling. The configuration includes:

- **UM Brand Colors**: 
  - Blue (`indigo-*`) - Primary color (#00274C)
  - Maize (`purple-*`) - Accent color (#FFCB05)
  - Red (`rose-*`) - Error/amateur color (#9A3324)

### Dark Mode

Dark mode is implemented using Tailwind's `dark:` variant. The theme is:
- Detected from system preferences
- Stored in localStorage
- Toggleable via UI

## State Management

Currently using React's built-in state management:

- `useState` for component-level state
- `useLocation` from React Router for route-based state
- `localStorage` for theme persistence

## Accessibility Features

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Focus management for modals and dropdowns
- Skip links for main content

### ARIA Attributes

- Proper roles and labels
- ARIA live regions for dynamic content
- ARIA expanded/controls for collapsible content

### Semantic HTML

- Proper heading hierarchy
- Semantic elements (`<nav>`, `<main>`, `<article>`, etc.)
- Form labels and fieldsets

### Color Contrast

- WCAG AA compliant contrast ratios
- Not relying on color alone
- Dark mode support with proper contrast

## Build Process

1. **Development**: `npm run dev` - Vite dev server with HMR
2. **Build**: `npm run build` - Production build to `dist/`
3. **Preview**: `npm run preview` - Preview production build locally

## Deployment

Deployed to GitHub Pages via GitHub Actions:

1. Push to `main` branch triggers workflow
2. Build runs on Ubuntu
3. Artifacts uploaded to GitHub Pages
4. Site available at `/designforall/` path

## Design Decisions

### Why Vite?

- Fast HMR for development
- Optimized production builds
- Modern tooling

### Why Tailwind CSS?

- Rapid development
- Consistent design system
- Small production bundle
- Dark mode support

### Why React Router?

- Client-side routing
- Programmatic navigation
- Route-based code splitting (future)

### Why Framer Motion?

- Smooth animations
- Accessibility-friendly (respects prefers-reduced-motion)
- Declarative API

## Future Considerations

- [ ] Add unit/integration tests
- [ ] Implement i18n for internationalization
- [ ] Add RTL language support
- [ ] Code splitting for better performance
- [ ] PWA capabilities
- [ ] Analytics (privacy-friendly)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed contribution guidelines.


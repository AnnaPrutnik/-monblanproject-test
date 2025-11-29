# Webspark Test Task

A modern, accessible web application built with Next.js for displaying and
filtering social media posts with date range selection.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Libraries**:
    - `react-datepicker` - Date range selection
    - `motion` (Framer Motion) - Smooth animations
- **Fonts**: Roboto, Montserrat (via Next.js font optimization)

## 📋 Features

- **Date Range Filtering**: Select "from" and "to" dates to filter posts
- **View Modes**: Switch between tiles and row layouts
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and
  1440px
- **Accessibility**: WCAG-compliant implementation with proper semantic HTML,
  ARIA labels, and keyboard navigation
- **Cross-browser Compatibility**: Tested and optimized for modern browsers
  (Chrome, Firefox, Safari, Edge)

## 🌐 Live Demo

The project is deployed and available at:

**🔗
[https://monblanproject-test.netlify.app/](https://monblanproject-test.netlify.app/)**

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AnnaPrutnik/-monblanproject-test.git
cd webspark
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
webspark/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Home page entry point
│   └── globals.css         # Global styles and Tailwind configuration
├── src/
│   ├── assets/
│   │   ├── data/           # Static data (text, list items)
│   │   └── images/         # Image assets
│   └── components/
│       ├── header/         # Header component with date picker
│       ├── list/           # Post list, cards, view switcher
│       ├── page/           # Main page component
│       └── shared/         # Shared components (Sprite)
└── public/
    └── images/
        └── sprite.svg      # SVG sprite for icons
```

## ♿ Accessibility Features

This project follows WCAG 2.1 guidelines and best practices:

### Semantic HTML

- Proper use of `<header>`, `<main>`, `<section>`, and `<h1>` elements
- Form inputs are properly associated with `<label>` elements using `htmlFor`
  and `id`

### ARIA Labels

- All interactive buttons have descriptive `aria-label` attributes
- Date picker buttons clearly indicate their purpose ("Clear start date", "Open
  end date calendar")
- View switcher radio buttons are accessible to screen readers

### Keyboard Navigation

- Radio buttons in view switcher are keyboard-accessible (using `sr-only` class
  instead of `hidden`)
- Focus indicators are visible for keyboard users
- Date picker supports keyboard navigation with visible focus states

### Screen Reader Support

- Decorative SVG icons are marked with `aria-hidden="true"`
- Decorative background images use empty `alt=""` attributes
- All meaningful content is properly announced

### Focus Management

- Custom focus styles for date picker calendar days
- Focus-visible states for view switcher buttons

## 🌐 Cross-browser Compatibility

The project is optimized for modern browsers:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Implementation Details

- CSS custom properties for consistent theming
- Modern JavaScript features (ES2017+)
- Next.js automatic polyfills for required features
- Tailwind CSS 4 with PostCSS for optimal CSS output

## 🎨 Styling Approach

- **Tailwind CSS 4** with custom theme configuration
- **CSS Custom Properties** for colors, shadows, and breakpoints
- **Responsive Design** using mobile-first breakpoints:
    - Mobile: default (< 768px)
    - Tablet: `md` (≥ 768px)
    - Desktop: `lg` (≥ 1440px)
- **Custom Utilities** for reusable patterns (`box`, `normal-text`,
  `small-text`, etc.)

## 🔧 Key Implementation Details

### Date Range Input

- Custom styled `react-datepicker` component
- Proper label association for form accessibility
- Dynamic `aria-label` based on input type (from/to)
- Visual focus indicators for keyboard navigation

### View Switcher

- Radio button group with proper accessibility
- Smooth transitions between view modes
- Keyboard accessible with visible focus states

### Animations

- Framer Motion for smooth layout transitions
- Opacity animations when switching view modes
- Respects user preferences (can be extended with `prefers-reduced-motion`)

### SVG Sprite System

- Centralized icon management via SVG sprite
- Decorative icons properly marked for screen readers
- Flexible component with optional accessibility props

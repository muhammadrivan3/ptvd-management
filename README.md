# Management Dashboard

A modern, enterprise-grade management dashboard built with Next.js 16, TypeScript, TailwindCSS, and next-intl for multilingual support.

## 🎯 Features

- **Atomic Design Architecture**: Modular component structure (atoms → molecules → organisms → templates → pages)
- **Multilingual Support**: English and Indonesian translations with next-intl
- **Dark/Light Mode**: Theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type-Safe**: Full TypeScript implementation
- **State Management**: Zustand for efficient state handling
- **Data Visualization**: Interactive charts with Recharts
- **Modern UI**: Clean, professional interface with shadcn-inspired components

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── [locale]/            # Locale-based routing
│   │   ├── dashboard/       # Main dashboard
│   │   ├── users/           # User management
│   │   ├── analytics/       # Analytics & reports
│   │   ├── projects/        # Project management
│   │   ├── templates/       # Template management
│   │   ├── services/        # Service offerings
│   │   ├── company/         # Company settings
│   │   ├── clients/         # Client management
│   │   ├── orders/          # Order management
│   │   └── messaging/       # Messaging center
│   └── globals.css          # Global styles
├── components/
│   ├── atoms/               # Base UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   ├── Badge.tsx
│   │   ├── Avatar.tsx
│   │   └── Spinner.tsx
│   ├── molecules/           # Composed components
│   │   ├── Card.tsx
│   │   ├── FormField.tsx
│   │   ├── SearchBar.tsx
│   │   ├── StatCard.tsx
│   │   ├── DataTable.tsx
│   │   └── UserMenu.tsx
│   ├── organisms/           # Complex sections
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   └── DashboardStats.tsx
│   ├── templates/           # Layout wrappers
│   │   └── DashboardLayout.tsx
│   └── providers/           # Context providers
│       └── ThemeProvider.tsx
├── config/                  # Configuration files
│   ├── navigation.ts        # Navigation items
│   └── site.ts             # Site configuration
├── lib/                     # Utilities and helpers
│   └── utils/
│       ├── cn.ts           # Class name utility
│       └── formatters.ts   # Data formatters
├── messages/                # i18n translations
│   ├── en.json             # English translations
│   └── id.json             # Indonesian translations
├── services/                # API and data services
│   └── mockData.ts         # Mock data for development
├── store/                   # Zustand stores
│   ├── themeStore.ts       # Theme state
│   ├── sidebarStore.ts     # Sidebar state
│   └── userStore.ts        # User state
├── types/                   # TypeScript types
│   └── index.ts            # Shared interfaces
├── i18n.ts                 # next-intl configuration
└── middleware.ts           # Next.js middleware

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vercel/sandbox
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Atomic Design Pattern

The project follows Atomic Design methodology:

- **Atoms**: Basic building blocks (Button, Input, Label, Badge, Avatar)
- **Molecules**: Simple component groups (Card, FormField, SearchBar, DataTable)
- **Organisms**: Complex UI sections (Sidebar, Navbar, DashboardStats)
- **Templates**: Page-level layouts (DashboardLayout)
- **Pages**: Complete pages with data and logic

### Component Usage

```tsx
// Atoms
import Button from "@/components/atoms/Button";
<Button variant="primary" size="md">Click Me</Button>

// Molecules
import { Card, CardHeader, CardTitle, CardContent } from "@/components/molecules/Card";
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Organisms
import DashboardLayout from "@/components/templates/DashboardLayout";
<DashboardLayout>
  {/* Your page content */}
</DashboardLayout>
```

## 🌐 Internationalization

The application supports English (en) and Indonesian (id) languages.

### Adding Translations

Edit the translation files in `src/messages/`:

```json
// en.json
{
  "nav": {
    "dashboard": "Dashboard",
    "users": "Users"
  }
}

// id.json
{
  "nav": {
    "dashboard": "Dasbor",
    "users": "Pengguna"
  }
}
```

### Using Translations

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("nav");
  return <h1>{t("dashboard")}</h1>;
}
```

## 🎯 Available Pages

1. **Dashboard** (`/dashboard`) - Analytics overview with charts
2. **Users** (`/users`) - User management with data table
3. **Analytics** (`/analytics`) - Detailed analytics and metrics
4. **Projects** (`/projects`) - Project tracking with progress bars
5. **Templates** (`/templates`) - Template management
6. **Services** (`/services`) - Service offerings catalog
7. **Company** (`/company`) - Company settings and preferences
8. **Clients** (`/clients`) - Client management
9. **Orders** (`/orders`) - Order tracking and management
10. **Messaging** (`/messaging`) - Internal messaging system

## 🔧 Configuration

### Path Aliases

The project uses TypeScript path aliases for clean imports:

```typescript
@/*           → ./src/*
@/atoms       → ./src/components/atoms
@/molecules   → ./src/components/molecules
@/organisms   → ./src/components/organisms
@/templates   → ./src/components/templates
@/lib/*       → ./src/lib/*
@/services/*  → ./src/services/*
@/store/*     → ./src/store/*
@/types       → ./src/types
@/config/*    → ./src/config/*
```

### Theme Configuration

Dark/light mode is managed by `next-themes`. Toggle theme using the Navbar button.

### State Management

Zustand stores are available for:
- Theme state (`useThemeStore`)
- Sidebar state (`useSidebarStore`)
- User state (`useUserStore`)

## 📊 Mock Data

Development uses mock data from `src/services/mockData.ts`. Replace with actual API calls in production:

```typescript
// Example: Replace mock data with API call
import { mockUsers } from "@/services/mockData";

// Replace with:
const { data: users } = await fetch("/api/users");
```

## 🎨 Styling

The project uses Tailwind CSS v4 with custom utilities:

```tsx
import { cn } from "@/lib/utils/cn";

// Merge classes with proper precedence
<div className={cn("base-class", conditionalClass && "conditional-class")} />
```

## 📝 TypeScript

Strict TypeScript configuration with shared types in `src/types/index.ts`:

```typescript
import type { User, Project, Client } from "@/types";
```

## 🔐 Authentication

The project is prepared for token-based authentication (JWT or cookie-session). Implement authentication logic in:
- `src/store/userStore.ts` - User state management
- Middleware for protected routes
- API integration for login/logout

## 📦 Dependencies

### Core
- Next.js 16.0.1
- React 19.2.0
- TypeScript 5

### UI & Styling
- Tailwind CSS 4.1.16
- lucide-react (icons)
- class-variance-authority
- clsx & tailwind-merge

### State & Data
- Zustand (state management)
- Recharts (data visualization)

### i18n & Theme
- next-intl (internationalization)
- next-themes (dark/light mode)

## 🚀 Deployment

The application is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

### Vercel Deployment

```bash
vercel deploy
```

### Environment Variables

Create `.env.local` for environment-specific configuration:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow the Atomic Design pattern and maintain TypeScript strict mode.

## 📧 Support

For issues or questions, please open an issue on the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

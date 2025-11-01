# Architecture Documentation

## Overview

This project follows **Atomic Design** principles combined with **Next.js App Router** architecture to create a scalable, maintainable enterprise management dashboard.

## Design Philosophy

### Atomic Design Pattern

The component hierarchy follows Brad Frost's Atomic Design methodology:

```
Atoms → Molecules → Organisms → Templates → Pages
```

#### 1. Atoms (Base Components)
**Location**: `src/components/atoms/`

Smallest, indivisible UI components that serve as building blocks:

- **Button**: Configurable button with variants (primary, secondary, outline, ghost, danger)
- **Input**: Text input with error states and dark mode support
- **Label**: Form labels with required field indicators
- **Badge**: Status indicators with color variants
- **Avatar**: User avatars with fallback initials
- **Spinner**: Loading indicators

**Key Characteristics**:
- No business logic
- Highly reusable
- Styled with Tailwind CSS
- Type-safe with TypeScript
- Support variants via class-variance-authority

**Example**:
```tsx
// Atom: Button with variants
<Button variant="primary" size="md">
  Save Changes
</Button>
```

#### 2. Molecules (Composite Components)
**Location**: `src/components/molecules/`

Combinations of atoms that form functional units:

- **Card**: Container with header, content, and footer sections
- **FormField**: Label + Input + Error message combination
- **SearchBar**: Input with search icon
- **StatCard**: Card displaying statistics with icons and trends
- **DataTable**: Reusable table with column configuration
- **UserMenu**: Dropdown menu with user actions

**Key Characteristics**:
- Combine multiple atoms
- Handle simple interactions
- Reusable across different contexts
- Accept configuration via props

**Example**:
```tsx
// Molecule: FormField combines Label + Input + Error
<FormField
  label="Email"
  type="email"
  error={errors.email}
  required
/>
```

#### 3. Organisms (Complex Sections)
**Location**: `src/components/organisms/`

Complex UI sections that combine molecules and atoms:

- **Sidebar**: Navigation sidebar with collapsible functionality
- **Navbar**: Top navigation with language switcher and user menu
- **DashboardStats**: Statistics overview with multiple stat cards

**Key Characteristics**:
- Contain business logic
- Manage local state
- Integrate with global state (Zustand)
- Handle user interactions

**Example**:
```tsx
// Organism: Sidebar with navigation logic
<Sidebar />
// - Manages collapse state
// - Handles active route highlighting
// - Integrates with i18n for labels
```

#### 4. Templates (Layout Wrappers)
**Location**: `src/components/templates/`

Page-level layouts that define structure:

- **DashboardLayout**: Main layout with Sidebar + Navbar + Content area

**Key Characteristics**:
- Define page structure
- Handle responsive behavior
- Provide consistent layout across pages

**Example**:
```tsx
// Template: DashboardLayout
<DashboardLayout>
  {/* Page content goes here */}
</DashboardLayout>
```

#### 5. Pages (Route Components)
**Location**: `src/app/[locale]/`

Complete pages with data fetching and business logic:

- Dashboard, Users, Analytics, Projects, etc.

**Key Characteristics**:
- Fetch and manage data
- Implement page-specific logic
- Use templates for layout
- Handle routing and navigation

## State Management

### Zustand Stores

The application uses Zustand for lightweight, efficient state management:

#### 1. Theme Store (`themeStore.ts`)
```typescript
{
  theme: "light" | "dark",
  setTheme: (theme) => void,
  toggleTheme: () => void
}
```

#### 2. Sidebar Store (`sidebarStore.ts`)
```typescript
{
  isCollapsed: boolean,
  setIsCollapsed: (collapsed) => void,
  toggleSidebar: () => void
}
```

#### 3. User Store (`userStore.ts`)
```typescript
{
  user: User | null,
  setUser: (user) => void,
  logout: () => void
}
```

**Why Zustand?**
- Minimal boilerplate
- No context providers needed
- Built-in persistence support
- TypeScript-first
- Small bundle size (~1KB)

## Internationalization (i18n)

### next-intl Integration

**Architecture**:
```
Middleware → Locale Detection → Message Loading → Component Translation
```

**Flow**:
1. **Middleware** (`src/middleware.ts`): Detects locale from URL
2. **i18n Config** (`src/i18n.ts`): Loads appropriate message file
3. **Layout** (`src/app/[locale]/layout.tsx`): Provides messages to components
4. **Components**: Use `useTranslations()` hook

**Translation Structure**:
```json
{
  "nav": { "dashboard": "Dashboard" },
  "common": { "save": "Save", "cancel": "Cancel" },
  "users": { "title": "User Management" }
}
```

**Usage**:
```tsx
const t = useTranslations("nav");
<h1>{t("dashboard")}</h1>
```

## Routing Architecture

### App Router Structure

```
app/
├── layout.tsx              # Root layout (minimal)
├── page.tsx               # Redirects to /en/dashboard
└── [locale]/              # Locale-based routing
    ├── layout.tsx         # Locale layout with providers
    ├── page.tsx          # Redirects to dashboard
    ├── dashboard/
    ├── users/
    ├── analytics/
    └── ...
```

**Route Pattern**: `/{locale}/{page}`
- Example: `/en/dashboard`, `/id/users`

**Benefits**:
- SEO-friendly URLs
- Automatic locale detection
- Easy language switching
- Type-safe routing

## Styling Architecture

### Tailwind CSS v4

**Utility-First Approach**:
- Compose styles using utility classes
- Custom utilities via `cn()` function
- Dark mode support with `dark:` prefix
- Responsive design with breakpoint prefixes

**Class Merging**:
```tsx
import { cn } from "@/lib/utils/cn";

// Properly merge and override classes
<div className={cn(
  "base-class",
  isActive && "active-class",
  className
)} />
```

**Component Variants**:
```tsx
// Using class-variance-authority
const buttonVariants = cva("base-styles", {
  variants: {
    variant: {
      primary: "bg-blue-600",
      secondary: "bg-gray-200"
    }
  }
});
```

## Data Flow

### Mock Data → API Integration

**Current (Development)**:
```tsx
import { mockUsers } from "@/services/mockData";
const users = mockUsers;
```

**Future (Production)**:
```tsx
// Replace with API calls
const users = await fetch("/api/users").then(r => r.json());
```

**Data Services Structure**:
```
services/
├── mockData.ts        # Development mock data
├── api/              # Future API integration
│   ├── users.ts
│   ├── projects.ts
│   └── ...
└── hooks/            # Custom data hooks
    ├── useUsers.ts
    └── useProjects.ts
```

## Type System

### TypeScript Architecture

**Shared Types** (`src/types/index.ts`):
- User, Project, Client, Order, Service, Template, Message
- AnalyticsData, ChartData
- NavigationItem

**Type Safety Benefits**:
- Compile-time error detection
- IntelliSense autocomplete
- Refactoring confidence
- Self-documenting code

**Example**:
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "user";
  status: "active" | "inactive";
  createdAt: string;
}
```

## Performance Optimizations

### 1. Code Splitting
- Automatic route-based splitting by Next.js
- Dynamic imports for heavy components

### 2. Image Optimization
- Next.js Image component for automatic optimization
- Lazy loading for images

### 3. Bundle Size
- Tree-shaking unused code
- Minimal dependencies
- Zustand (~1KB) vs Redux (~20KB)

### 4. Caching
- Static generation where possible
- API response caching
- Browser caching for assets

## Security Considerations

### 1. Authentication (Future)
- JWT token-based authentication
- Secure HTTP-only cookies
- CSRF protection

### 2. Authorization
- Role-based access control (RBAC)
- Route protection middleware
- API endpoint guards

### 3. Data Validation
- Input sanitization
- Type validation with TypeScript
- Form validation

### 4. XSS Prevention
- React's built-in XSS protection
- Content Security Policy headers
- Sanitize user-generated content

## Testing Strategy (Future Implementation)

### 1. Unit Tests
- Test atoms and molecules in isolation
- Jest + React Testing Library

### 2. Integration Tests
- Test organisms and templates
- Mock API responses

### 3. E2E Tests
- Test complete user flows
- Playwright or Cypress

### 4. Type Tests
- TypeScript compilation as tests
- Ensure type safety

## Deployment Architecture

### Vercel (Recommended)
```
Git Push → Vercel Build → Edge Network → Users
```

**Benefits**:
- Automatic deployments
- Edge caching
- Serverless functions
- Preview deployments

### Alternative Platforms
- Netlify
- AWS Amplify
- Docker + Kubernetes
- Traditional Node.js hosting

## Scalability Considerations

### 1. Component Scalability
- Atomic Design allows easy addition of new components
- Reusable components reduce duplication

### 2. Feature Scalability
- Modular architecture
- Easy to add new pages/routes
- Isolated feature modules

### 3. Data Scalability
- Replace mock data with API calls
- Implement pagination
- Add caching layer
- Use database for persistence

### 4. Team Scalability
- Clear component hierarchy
- Consistent patterns
- Type safety reduces bugs
- Self-documenting code

## Best Practices

### 1. Component Development
- Keep components small and focused
- Use TypeScript strictly
- Follow Atomic Design principles
- Write reusable, testable code

### 2. State Management
- Use local state when possible
- Global state only for shared data
- Avoid prop drilling

### 3. Styling
- Use Tailwind utilities
- Avoid custom CSS when possible
- Maintain consistent spacing
- Support dark mode

### 4. Code Organization
- Group related files
- Use path aliases
- Keep files under 300 lines
- Extract reusable logic

## Future Enhancements

### 1. Backend Integration
- Connect to REST or GraphQL API
- Implement real authentication
- Add database persistence

### 2. Advanced Features
- Real-time updates (WebSockets)
- File upload functionality
- Advanced filtering and search
- Export to PDF/Excel

### 3. Testing
- Add comprehensive test suite
- Set up CI/CD pipeline
- Automated testing on PRs

### 4. Performance
- Implement virtual scrolling for large lists
- Add service worker for offline support
- Optimize bundle size further

---

This architecture provides a solid foundation for building scalable, maintainable enterprise applications while following modern best practices and design patterns.

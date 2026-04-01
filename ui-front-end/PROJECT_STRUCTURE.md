# Sensibolt IT Services - Application Structure

## Overview

Sensibolt IT Services is a comprehensive IT service desk solution for managing support tickets, incidents, and service requests across your organization.

## Folder Structure

```
src/app/
├── features/                    # Feature modules
│   ├── home/                   # Home/Dashboard feature
│   │   └── home.component.ts
│   ├── tickets/                # IT Service Tickets
│   │   ├── add-ticket.component.ts
│   │   └── tickets-list.component.ts
│   ├── analytics/              # Service Analytics & Reports
│   │   └── analytics.component.ts
│   ├── service-types/          # Service Types & Configuration
│   │   └── service-types.component.ts
│   └── profile/                # Profile & Settings
│       └── profile.component.ts
├── shared/                      # Shared components
│   └── components/
│       ├── header/
│       │   ├── header.component.ts
│       │   ├── header.component.html
│       │   └── header.component.scss
│       └── footer/
│           ├── footer.component.ts
│           ├── footer.component.html
│           └── footer.component.scss
├── layout/                      # Layout component
│   ├── layout.component.ts
│   ├── layout.component.html
│   └── layout.component.scss
├── auth/                        # Authentication
│   ├── components/
│   │   └── signin.component.ts
│   └── services/
├── app.ts                       # Root component
├── app.html                     # Template
├── app.scss                     # Styles
└── app.routes.ts               # Routing configuration
```

## Header Navigation Items

The header component includes the following navigation items:
1. **Home** - IT Service Dashboard
2. **New Ticket** - Create new service ticket or incident
3. **Tickets** - View all service tickets
4. **Analytics** - Service performance analytics and reports
5. **Service Types** - Manage ticket types and service categories
6. **Profile / Settings** - User profile and preferences

## Component Hierarchy

```
App (Root)
└── LayoutComponent
    ├── HeaderComponent (with navigation)
    ├── RouterOutlet (Feature components)
    └── FooterComponent
```

## Available Routes

- `/` → Redirects to `/home`
- `/home` → Home component
- `/expenses/add` → Add Expense component
- `/expenses/history` → Expenses History component
- `/reports` → Reports component
- `/categories` → Categories component
- `/profile` → Profile component

## Styling

- **Header**: Dark theme (#2c3e50) with blue highlights (#3498db)
- **Footer**: Matches header styling
- **Responsive**: Mobile-friendly with breakpoints at 768px
- **Typography**: System fonts for better performance

## Features

✅ Enterprise-level folder structure  
✅ Standalone Angular components  
✅ Lazy-loaded routing  
✅ Responsive design  
✅ SCSS styling  
✅ Shared component architecture  
✅ Type-safe routing  

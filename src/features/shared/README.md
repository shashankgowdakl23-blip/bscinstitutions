# Shared Components

This directory contains reusable components used across multiple pages in the application.

## Components

### PageLayout

A wrapper component that provides consistent page structure with:

- Header
- Footer  
- Motion animations
- Configurable background

**Usage:**

```tsx
import { PageLayout } from "@/features/shared";

<PageLayout background="custom-bg-class">
  {/* Page content */}
</PageLayout>
```

### SectionWrapper

Provides consistent section animations with:

- Fade-in and slide-up animations
- Configurable delays
- Viewport-based triggers

**Usage:**

```tsx
import { SectionWrapper } from "@/features/shared";

<SectionWrapper id="section-id" delay={0.2}>
  {/* Section content */}
</SectionWrapper>
```

### CTA (Call-to-Action)

Reusable call-to-action section with:

- Configurable title and description
- Primary and secondary buttons
- Optional statistics display
- Multiple variants (gradient/solid)

**Usage:**

```tsx
import { CTA } from "@/features/shared";

<CTA
  title="Ready to Start?"
  description="Join our community"
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  primaryButtonAction={() => {}}
  secondaryButtonAction={() => {}}
  showStats={true}
  variant="gradient"
/>
```

### Header

Responsive navigation header with:

- Dynamic background based on scroll position
- Mobile hamburger menu with animations
- Smooth hover effects and scaling
- Contact buttons (Call, WhatsApp)

### Footer

Comprehensive footer with:

- Company information and certification
- Functional quick links with navigation
- Interactive contact information
- Class timings and flexible schedules
- Floating WhatsApp button

## Data Structure

### Courses Data (`@/data/courses.ts`)

- `Course` interface for course information
- `ComparisonFeature` interface for comparison tables
- Pre-defined course data and comparison features

### Utilities (`@/utils/contact.ts`)

- `handleWhatsApp()` - Opens WhatsApp with custom message
- `handleCall()` - Initiates phone call
- `handleEmail()` - Opens email client with pre-filled recipient
- `handleWhatsAppWithCustomMessage()` - WhatsApp with specific message

## Benefits

1. **Reusability**: Components can be used across multiple pages
2. **Consistency**: Ensures uniform styling and behavior
3. **Maintainability**: Changes in one place affect all usages
4. **Type Safety**: TypeScript interfaces ensure data consistency
5. **Performance**: Optimized animations and lazy loading
6. **Accessibility**: Built-in focus states and semantic markup
7. **Navigation**: Smart cross-page navigation and smooth scrolling

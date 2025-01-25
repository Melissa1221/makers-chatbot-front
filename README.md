# Makers Tech ChatBot Project

## Project Overview
This project is designed to assist a technology e-commerce company, **Makers Tech**, by developing a ChatBot capable of providing real-time inventory updates, product details, and pricing information. The ChatBot will offer a user-friendly graphical interface for personalized interaction.

In addition to the main functionality, optional features include a product recommendation system and an administrative dashboard for inventory metrics.

---

## Features

### Core Feature
- **ChatBot:**
  - Respond to user queries regarding inventory, features, and pricing in real-time.
  - Provide a personalized conversational experience.

### Optional Features
- **Product Recommendation System:**
  - Categorize products as "Highly Recommended," "Recommended," or "Not Recommended" based on user preferences.
  - Display recommendations when users log in.
- **Admin Dashboard:**
  - Visualize stock metrics through interactive charts and tables.
  - Access data such as total inventory, low-stock products, and sales trends.

---

## Design System

### Color Palette
- **Primary Colors:**
  - Green: `#6DBEA5`
  - Dark: `#0F172A`
  - Blue/Lilac: `#8596CA`
  - Accent Purple: `#9333EA`

- **Gradient Colors:**
  - Purple Gradient: `#E6D0FB`
  - Green Gradient: `#E0F7FD`

### Typography
- **Font Family:** [Public Sans](https://fonts.google.com/specimen/Public+Sans)
  - A clean, versatile sans-serif font that ensures excellent readability across all devices

---

## Technologies Used
- **Backend:** FastAPI, LangChain, SQLAlchemy
- **Frontend:**  React
- **Database:** PostgreSQL
- **Visualization:** Chart.js or D3.js (for dashboard metrics)
- **Authentication:** JWT-based authentication for secure user sessions

---

## Project Structure
```
src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable UI components
│   ├── common/      # Shared components (Button, Input, etc.)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Loading.tsx
│   ├── chat/        # Chat-related components
│   │   ├── ChatBubble.tsx
│   │   ├── ChatInput.tsx
│   │   └── ChatWindow.tsx
│   ├── admin/       # Admin dashboard components
│   │   ├── DashboardStats.tsx
│   │   ├── InventoryTable.tsx
│   │   └── SalesChart.tsx
│   └── products/    # Product-related components
│       ├── ProductCard.tsx
│       ├── ProductGrid.tsx
│       └── RecommendationBadge.tsx
├── context/         # React Context providers
│   ├── AuthContext.tsx
│   └── ChatContext.tsx
├── hooks/           # Custom React hooks
│   ├── useChat.ts
│   ├── useProducts.ts
│   └── useAuth.ts
├── layouts/         # Layout components
│   ├── MainLayout.tsx
│   └── AdminLayout.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── Chat.tsx
│   ├── Products.tsx
│   └── admin/
│       ├── Dashboard.tsx
│       └── Inventory.tsx
├── services/        # API services and external integrations
│   ├── api.ts
│   ├── chat.ts
│   └── products.ts
├── styles/          # Global styles and Tailwind configurations
│   └── globals.css
├── types/           # TypeScript type definitions
│   ├── chat.ts
│   └── product.ts
└── utils/           # Utility functions and helpers
    ├── formatters.ts
    └── validators.ts
```

## Setup and Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps
1. Clone the repository
```bash
git clone <repository-url>
cd makers-chatbot-front
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Start development server
```bash
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow ESLint configuration
- Use functional components with hooks
- Implement proper error handling
- Write meaningful component and function names

### Component Structure
```typescript
import { FC } from 'react';

interface ComponentProps {
  // Props definition
}

export const Component: FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};
```

### State Management
- Use React Context for global state
- Use React Query for server state
- Keep component state minimal and focused

### Styling
- Use Tailwind CSS for styling
- Follow the design system color palette
- Maintain responsive design principles
- Use CSS modules for component-specific styles

### Testing
- Write unit tests for utilities
- Write integration tests for components
- Test error scenarios
- Maintain good test coverage

## Contributing
1. Create a new branch for each feature
2. Follow the commit message convention
3. Submit PR with description of changes
4. Ensure all tests pass
5. Request code review

---
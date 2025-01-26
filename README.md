# Makers Tech E-commerce & ChatBot

## Project Overview
A modern e-commerce platform for Makers Tech, featuring a real-time ChatBot assistant, dynamic product catalog, and intelligent search functionality.

### Core Features

#### Product Catalog
- Real-time product inventory display
- Dynamic category filtering
- Advanced search functionality
- Responsive product grid layout
- Product details with specifications

#### ChatBot Assistant (MakeBot)
- Real-time customer support
- Product recommendations
- Inventory queries
- Price information
- Natural language processing

#### Search System
- Instant search results
- Filter by:
  - Product name
  - Category
  - Labels
  - Description
- Smart suggestions

### Technical Stack

#### Frontend
- React 18
- TypeScript
- TailwindCSS
- React Router v6
- Custom Hooks
- Responsive Design

#### Backend Integration
- RESTful API
- Real-time data fetching
- Error handling
- Type-safe API calls

### API Endpoints

```typescript
// Products
GET /products                    // Get all products
GET /products/{product_id}       // Get specific product
GET /categories                  // Get all categories
GET /categories/{id}/products    // Get products by category
GET /labels                      // Get all product labels

// ChatBot
POST /chat                       // Send message to chatbot
```

### Design System

#### Colors
- Primary Purple: #9333EA
- Primary Green: #6DBEA5
- Primary Blue: #8596CA
- Primary Dark: #0F172A

#### Animations
- Gradient morphing
- Smooth transitions
- Loading states
- Hover effects

### Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

### Project Structure

```
src/
├── components/
│   ├── chat/           # ChatBot components
│   ├── common/         # Reusable components
│   ├── navigation/     # Navigation components
│   ├── products/       # Product-related components
│   └── sections/       # Page sections
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── pages/              # Page components
├── services/           # API services
└── styles/             # Global styles
```

### Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### License
MIT License - see LICENSE.md for details
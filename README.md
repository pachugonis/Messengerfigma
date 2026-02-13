# Messenger

Modern messenger landing page and chat interface built with React 18 and Vite.

**Figma Design**: [View Original Design](https://www.figma.com/design/6jetdocHFmKEyqkxL0NcIt/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D0%B0)

## Tech Stack

- **React 18.3.1** — UI library
- **Vite 6.3.5** — Build tool & dev server
- **React Router 7** — Client-side routing
- **Tailwind CSS 4** — Utility-first styling
- **Radix UI** — Accessible UI primitives
- **Lucide React** — Icon library
- **Motion** — Animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── figma/          # Figma-specific components
│   │   ├── ui/             # Reusable UI components (Radix-based)
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Features.tsx    # Features grid
│   │   ├── Stats.tsx       # Statistics section
│   │   ├── CTA.tsx         # Call-to-action
│   │   ├── Footer.tsx      # Page footer
│   │   ├── ChatSidebar.tsx # Chat list sidebar
│   │   └── ChatWindow.tsx  # Chat conversation view
│   ├── pages/
│   │   ├── Home.tsx        # Landing page
│   │   ├── Chats.tsx       # Chat interface
│   │   └── Root.tsx        # Root layout
│   ├── App.tsx             # App entry point
│   └── routes.tsx          # Route definitions
├── styles/
│   ├── index.css           # Global styles
│   ├── tailwind.css        # Tailwind imports
│   ├── theme.css           # Theme variables
│   └── fonts.css           # Font definitions
└── main.tsx                # Application bootstrap
```

## Pages

| Route    | Description                              |
| -------- | ---------------------------------------- |
| `/`      | Landing page with hero, features, stats  |
| `/chats` | Full-screen chat interface (responsive)  |

## Features

- Responsive design (mobile + desktop)
- Modern landing page with gradient backgrounds
- Real-time chat UI with message bubbles
- Online status indicators
- Mobile-first chat navigation
- Accessible UI components

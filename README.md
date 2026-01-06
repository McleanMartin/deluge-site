# Deluge Solutions - React + Vite Website

A modern, multi-page website for Deluge Solutions built with React and Vite, showcasing IoT and Automation services along with Business Enterprise Software projects.

## Features

- ✅ **Multi-page Navigation** - React Router for seamless page transitions
- ✅ **Responsive Navbar** - Fixed navigation bar with mobile menu
- ✅ **Projects Page** - Showcase of software/web-based projects
- ✅ **Modern UI** - Glassmorphism design with smooth animations
- ✅ **WhatsApp Integration** - Floating WhatsApp button for quick contact

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Outfit & Syne)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar component
│   │   ├── LoadingScreen.jsx   # Loading screen component
│   │   └── WhatsAppFloat.jsx   # WhatsApp floating button
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Services.jsx        # Services page
│   │   ├── Training.jsx        # Training page
│   │   ├── Components.jsx      # Components page
│   │   ├── Projects.jsx        # Projects showcase page
│   │   ├── About.jsx           # About page
│   │   └── Contact.jsx         # Contact page
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # Global styles
│   └── main.jsx                # Entry point
├── public/
│   └── images/                # Static images (actuator.webp, bg.jpg, etc.)
├── index.html                  # HTML template
├── package.json               # Dependencies
└── vite.config.js             # Vite configuration
```

## Pages

- **Home** (`/`) - Landing page with hero section and core values
- **Services** (`/services`) - IoT and automation services organized by category
- **Training** (`/training`) - Educational training programs
- **Components** (`/components`) - Hardware components catalog
- **Projects** (`/projects`) - Showcase of software/web-based projects
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact information and business hours

## Customization

### Adding New Projects

Edit `src/pages/Projects.jsx` and add new project objects to the `projects` array:

```javascript
{
  id: 10,
  title: "Your Project Title",
  category: "Business Enterprise Software",
  description: "Project description...",
  tech: ["React", "Node.js", "PostgreSQL"]
}
```

### Styling

All styles are in `src/App.css`. The design uses CSS variables defined in `:root` for easy theming.

### Using Images

Images are stored in the `public/images/` folder. In Vite, you can reference them directly in your components:

```jsx
<img src="/images/plc.webp" alt="PLC Component" />
```

Available images:
- `actuator.webp`
- `bg.jpg`
- `board.webp`
- `gb.jpg`
- `kit.webp`
- `plc.webp`
- `sensors.jpg`
- `wireless.jpg`

## Notes

- The site focuses on **IoT and Software projects** (Business Enterprise Softwares)
- All dummy projects in the Projects page are web-based software solutions
- The original design aesthetic has been preserved with modern React implementation

## License

© 2026 Deluge Solutions - IoT & Automation Specialists


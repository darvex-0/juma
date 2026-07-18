# Jamia Masjid Institutional Portal

A modern, professional institutional portal designed to preserve centuries of Islamic heritage, highlight educational programs, and showcase community impact. Built with React, TypeScript, and modern web technologies to deliver an immersive and highly polished user experience.

## Features

*   **Immersive 3D Experiences**: Procedurally generated Islamic architectural elements using React Three Fiber.
*   **Interactive History Timeline**: A scroll-triggered, animated timeline documenting key milestones and historical events.
*   **Department Showcase**: Highlighted sections for the Academy, Heritage, and Community welfare programs.
*   **Responsive Design**: Fully adaptive layout optimized for all device sizes using Tailwind CSS.
*   **Smooth Animations**: Fluid scroll and transition effects powered by Framer Motion.

## Tech Stack

*   **Framework**: [React](https://react.dev/)
*   **Tooling**: [Vite](https://vitejs.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Motion (Framer Motion)](https://motion.dev/)
*   **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) & [Three.js](https://threejs.org/)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/jamia-masjid-portal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd jamia-masjid-portal
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:
```bash
npm run dev
```

### Build for Production

To build the application for production:
```bash
npm run build
```
The compiled static assets will be available in the `dist` directory.

## Project Structure

*   `/src/components/` - Modular React components mapping to the portal's primary sections (Hero, Timeline, Showcase, Civic Impact).
*   `/src/App.tsx` - Main orchestrator and layout assembly.
*   `/src/index.css` - Global configuration and styles, custom fonts, and Tailwind directives.

## License

This project is licensed under the MIT License.

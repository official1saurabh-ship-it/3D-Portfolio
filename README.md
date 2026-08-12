# 3D Portfolio

An interactive, animated personal portfolio for **Saurabh Bharadwaj**, a Frontend Developer. Built with **React**, **Vite**, and **GSAP**, featuring a dark immersive theme with scroll-driven animations, a custom cursor, and a horizontal-scroll projects showcase.

## ✨ Features

- **Custom cursor** with hover labels (e.g. `GO`, `VIEW`, `SHOW`) on interactive elements
- **Global parallax background** with animated blobs
- **Navbar** that auto-hides on scroll down and reappears on scroll up
- **Hero section** with staggered GSAP entrance animations
- **About** with word-by-word `SplitText` reveal animations
- **Skills** grid with 3D tilt-on-hover cards
- **Experience** timeline with a scroll-linked progress line
- **Projects** horizontal scroll section (pinned with `ScrollTrigger`), image hover zoom, and image parallax
- **Achievements** with animated count-up counters
- **Contact** section with a magnetic "Let's Talk" button

## 🛠️ Tech Stack

- **React 19** + **Vite 7**
- **GSAP** (with `@gsap/react`, `ScrollTrigger`, and `SplitText` plugins)
- **JavaScript (ES Modules)**
- **CSS** (custom styling in `src/index.css`)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx            # Auto-hiding navigation bar
│   ├── Hero.jsx              # Hero section with entrance animations
│   ├── About.jsx             # About section with SplitText animations
│   ├── Skills.jsx            # Skills grid with tilt-on-hover cards
│   ├── Experience.jsx        # Timeline with scroll progress line
│   ├── Projects.jsx          # Horizontal scroll projects showcase
│   ├── Education.jsx         # Education list
│   ├── Achievements.jsx      # Count-up achievement counters
│   ├── Contact.jsx           # Contact with magnetic button
│   ├── CustomCursor.jsx      # Custom cursor with hover labels
│   └── GlobalParallax.jsx    # Parallax blob background
├── animations/               # Animation helper placeholders
├── projects/                 # Project images
├── App.jsx                   # Main app composition
├── index.css                 # Global styles
└── main.jsx                  # React entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## 📄 Scripts

| Script     | Description                          |
| ---------- | ------------------------------------ |
| `dev`      | Start the Vite development server    |
| `build`    | Build the project for production     |
| `preview`  | Preview the production build locally |
| `lint`     | Run ESLint on the project            |

## 🎨 Sections

1. **Hero** — name, role, and tagline
2. **About** — intro and goal
3. **Skills** — HTML, CSS, JavaScript, React, Tailwind, Node.js, Express, MongoDB
4. **Experience** — Frontend Intern @ Biosoftech Solution Pvt. Ltd. (2026), B.Tech CSE (2025), Full Stack Development (2024)
5. **Projects** — AI Fitness Trainer, 3D Portfolio, E-Commerce Platform, Real-Time Chat App, Analytics Dashboard
6. **Education** — B.Tech CSE, Noida Institute of Engineering and Technology (2021–2025)
7. **Achievements** — animated stats (landing pages, projects, technologies, internships)
8. **Contact** — "Let's Talk" magnetic CTA

## 📄 License

This project is for personal use. Feel free to use it as a reference for building your own animated portfolio.

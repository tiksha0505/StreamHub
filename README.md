# 🎬 StreamHub — AI Content Discovery Platform

A responsive, front-end-only content discovery platform inspired by the modern streaming/creator-economy space. Built as a portfolio project to demonstrate production-quality React architecture, motion design, and performance-conscious UI engineering.

**Live Demo:** https://stream-hub-fawn.vercel.app/

---

## Features

- **Discovery Feed** — Responsive content grid with category filtering and live search
- **AI Smart Hover** — Glassmorphic overlay on content cards revealing an AI-style insight ("95% match based on your watch history")
- **Creator Profiles** — Dynamic routing (`/creator/:id`) with bio, stats, and creator-specific content grid
- **Skeleton Loading States** — Simulated async data fetching (800ms) with staggered skeleton UI
- **Premium Micro-interactions** — Framer Motion page transitions, staggered grid entrances, and magnetic button hover effects
- **Cinematic Hero** — Parallax-feel hero section with dynamic mesh gradient background (dark mode by default)
- **Fully Responsive** — Tested from 375px mobile to 4K desktop

---

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React (Vite) |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge |
| Data | Local mock JSON (no backend/database) |

No paid APIs, no backend, no database — everything runs client-side on mock data, designed to be deployable for free.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ContentCard.jsx
│   ├── ContentGrid.jsx
│   ├── SkeletonCard.jsx
│   ├── SearchBar.jsx
│   ├── FilterBar.jsx
│   ├── CreatorHeader.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── CreatorProfile.jsx
│   └── SearchResults.jsx
├── data/
│   ├── content.json
│   └── creators.json
├── hooks/
│   └── useContent.js
├── App.jsx
└── main.jsx
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/<your-username>/streamhub.git
cd streamhub

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Try it out
- Search for "UI/UX" or "AI" in the search bar
- Click category chips to filter the feed
- Click a creator's avatar to visit their profile page
- Hover over a content card to see the AI Insight overlay

---

## Performance

Built and tested with `npm run build` + `npm run preview`, verified with Lighthouse (target: 90+ performance score). Optimizations include lazy-loaded images, route-based code splitting, and skeleton loading states to reduce perceived load time.

---

## Notes

This is a front-end-only project — all content/creator data is local mock JSON, and the "AI Insight" feature is a simulated/static demonstration of the concept rather than a live model integration.

---

## 📄 License

MIT

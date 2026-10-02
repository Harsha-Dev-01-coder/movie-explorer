# 🎬 Movie Explorer

A modern movie discovery web application built with React, TypeScript, Tailwind CSS, React Router, Axios, and the TMDB API.

Movie Explorer allows users to discover movies, search for movies, browse different movie categories, view movie information, and save their favorite movies.

---

## 🚀 Live Demo

Coming soon.

---

## 📸 Preview

Coming soon.

---

## ✨ Features

### Current Features

- 🎬 Browse popular movies
- ⭐ Browse top-rated movies
- 🍿 Browse now-playing movies
- 🔎 Search for movies
- 🔗 Search state synchronized with URL query parameters
- 🖼️ Movie posters
- ⭐ Movie ratings
- 📅 Movie release years
- 🎞️ Responsive movie grid
- 📱 Responsive UI
- 🧩 Reusable MovieCard component
- 🧩 Reusable MovieGrid component
- 🔄 Loading states
- ❌ Error handling
- 📭 Empty states
- 🖼️ Fallback handling for missing movie posters
- 🧭 Client-side routing
- 🔗 Navigation to movie details
- 🏗️ Separated API/service architecture
- 🔷 TypeScript API types

### Planned Features

- 🎞️ Movie details page
- ❤️ Favorites
- 💾 Persistent favorites using localStorage
- 🎭 Movie genres
- 🎥 Movie trailers
- 👥 Cast information
- 📄 Pagination / infinite scrolling
- 🌙 Dark mode
- 🚀 Production deployment

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router

### API & Data

- Axios
- TMDB API
- REST API

### Development

- Vite
- ESLint
- Git
- GitHub

---

## 📁 Project Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── EmptyState.tsx
│   ├── ErrorMessage.tsx
│   ├── Loading.tsx
│   ├── MovieCard.tsx
│   ├── MovieGrid.tsx
│   └── Navbar.tsx
│
├── hooks/
│
├── layouts/
│
├── pages/
│   ├── Favorites.tsx
│   ├── Home.tsx
│   ├── MovieDetails.tsx
│   ├── Movies.tsx
│   └── Search.tsx
│
├── services/
│   ├── api.ts
│   └── movieService.ts
│
├── types/
│   └── movie.ts
│
├── utils/
│   └── image.ts
│
├── App.tsx
├── index.css
└── main.tsx
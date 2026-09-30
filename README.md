# 🎬 Movie Explorer

A modern movie discovery web application built with React, TypeScript, Tailwind CSS, and the TMDB API.

Movie Explorer allows users to discover popular movies, browse movie information, search for movies, view detailed information, and save their favorite movies.

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
- ⭐ Display movie ratings
- 📅 Display movie release dates
- 🖼️ Display movie posters
- 🔄 Loading states
- ❌ Error handling
- 📭 Empty states
- 🧩 Reusable MovieCard component
- 🧭 Client-side routing
- 📱 Responsive movie browsing interface

### Planned Features

- 🔎 Movie search
- 🎞️ Movie details page
- ❤️ Favorites
- 💾 Persistent favorites using localStorage
- 🎯 Top Rated movies
- 🍿 Now Playing movies
- 📄 Pagination / infinite scrolling
- 🎭 Movie genres
- 🎥 Trailers
- 👥 Cast information
- 🌙 Dark mode improvements
- 🚀 Production deployment

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router

### Data & API

- Axios
- TMDB API

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
│
├── App.tsx
├── index.css
└── main.tsx
# Movie App

A responsive movie application built with React, JavaScript and CSS.

This project was built to strengthen my React fundamentals through a practical application using components, state management, React Router, Context API, API requests and browser storage.

## 🔗 Live Demo

[View Live Demo](https://mzwandilem.github.io/Movie-App/)

## ✨ Features

### Movie Discovery

- Browse popular movies
- Search for movies
- Display movie posters
- Display movie titles
- Display release dates
- Loading states
- Error handling

### Favorites

- Add movies to favorites
- Remove movies from favorites
- Toggle favorite status
- View all favorite movies
- Display favorite movie count
- Prevent duplicate favorites
- Persist favorites using `localStorage`

### Navigation

- Home page
- Favorites page
- Client-side navigation using React Router

### UI

- Responsive movie grid
- Movie cards
- Favorite buttons
- Loading state
- Error state
- Empty favorites state
- Responsive layout

## 🛠️ Technologies

- React
- JavaScript
- CSS3
- Vite
- React Router
- Context API
- React Hooks
- TMDB API
- LocalStorage API

## 🧠 React Concepts Practiced

This project helped me practice:

- Components
- JSX
- Props
- State management
- `useState`
- `useEffect`
- `useContext`
- Context API
- Custom hooks
- Event handling
- Controlled inputs
- Conditional rendering
- List rendering
- Component communication
- State ownership
- Lifting state
- React Router
- API requests
- Async/await
- Error handling
- Loading states
- LocalStorage
- Immutability
- Array methods such as `map`, `filter` and `some`

## 📁 Project Structure

```text
movie-app/
│
├── src/
│   ├── components/
│   │   └── MovieCard.jsx
│   │
│   ├── context/
│   │   ├── FavoritesContext.jsx
│   │   ├── FavoritesProvider.jsx
│   │   └── useFavorites.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Favorites.jsx
│   │   └── NavBar.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── css/
│   │   └── App.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md

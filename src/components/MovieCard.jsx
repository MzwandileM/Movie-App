import { useFavorites } from "../context/useFavorites";

function MovieCard({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorite = favorites.some((favorite) => favorite.id === movie.id);

  function handleFavoriteClick() {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie_card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h3>{movie.title}</h3>

      <div className="movie_info">
        <p>{movie.release_date}</p>

        <button
          className={`favorite_btn ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

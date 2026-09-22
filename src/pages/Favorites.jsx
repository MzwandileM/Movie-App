import MovieCard from "../components/MovieCard";
import { useFavorites } from "../context/useFavorites";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites_page">
      <div className="favorites_header">
        <h2>Favorite Movies</h2>
        <p>{favorites.length} movies saved</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty_favorites">
          <div className="empty_icon">♡</div>
          <h3>No favorite movies yet</h3>
          <p>Click the heart on a movie to add it to your favorites.</p>
        </div>
      ) : (
        <div className="movie_grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

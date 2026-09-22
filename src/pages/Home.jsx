import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovie(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchMovie.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchMovie);
      setMovie(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="content">
        <div className="search_input">
          <input
            type="text"
            placeholder="search for a movie"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {error && <div className="error">{error}</div>}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movie_grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

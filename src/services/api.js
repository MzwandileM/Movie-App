const API_KEY = import.meta.env.VITE_API_KEY;
const Base_KEY = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${Base_KEY}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();

  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${Base_KEY}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}`,
  );

  const data = await response.json();

  return data.results;
};

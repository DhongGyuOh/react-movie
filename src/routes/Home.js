import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

const url_movie =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(url_movie)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json.data.movies);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div>
      <h1>Movie List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div style={{ padding: "20px" }}>
          {movies.map((currentArray) => (
            <MovieDetail
              key={currentArray.id}
              id={currentArray.id}
              medium_cover_image={currentArray.medium_cover_image}
              title={currentArray.title}
              year={currentArray.year}
              runtime={currentArray.runtime}
              genres={currentArray.genres}
              synopsis={currentArray.synopsis}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

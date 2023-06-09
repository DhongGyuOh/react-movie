import { useEffect, useState } from "react";

const url_movie =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";

function MovieInfo() {
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
            <div key={currentArray.id}>
              <img src={currentArray.medium_cover_image} />
              <p>{currentArray.title}</p>
              <span>{currentArray.year} / </span>
              <span>{currentArray.runtime}minutes / </span>
              <span>
                {currentArray.genres.map((g, index) => (
                  <p key={index}>{g}</p>
                ))}
              </span>
              <p>{currentArray.synopsis}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieInfo;

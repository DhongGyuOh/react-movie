import { Link } from "react-router-dom";
function MovieDetail({
  medium_cover_image,
  title,
  year,
  runtime,
  genres,
  synopsis,
  id,
}) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <span>{year} / </span>
      <span>{runtime}minutes / </span>
      <span>
        {genres.map((g, index) => (
          <p key={index}>{g}</p>
        ))}
      </span>
      <p>{synopsis}</p>
    </div>
  );
}

export default MovieDetail;

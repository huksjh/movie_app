import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({ id, year, title, poster, summary, genres }) {
  //console.log(poster);
  return (
    <div className="movies_movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            poster,
            summary,
            genres
          }
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h4 className="movie_year">{year}</h4>
          <ul className="movie_gener">
            {genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <p className="movie_summary">{summary.slice(0, 150)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movies;

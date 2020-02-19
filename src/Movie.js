import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({ id, year, title, poster, summary, genres }) {
  //console.log(poster);
  return (
    <div className="movies_movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h4 className="movie_year">{year}</h4>
        <ul className="movie_gener">
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <h5 className="movie_summary">{summary.slice(0, 150)}...</h5>
      </div>
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

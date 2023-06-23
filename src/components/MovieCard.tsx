import React from "react";
import PropTypes from "prop-types";
import "./components.css"
import { Link } from "react-router-dom";

interface Props {
  movie: any;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Link to={`/${movie.id}`}>
      <div className="box">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="400"
          height="300"
        />
        <div className="box-content">
          <h2 className="title">{movie.title}</h2>
          <p className="release-date">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;

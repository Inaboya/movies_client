import React from "react";
import PropTypes from "prop-types";
import "./components.css";
import { Link } from "react-router-dom";
import "./components.css";

interface Props {
  movie: any;
}

const FavoriteMovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="image-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
          className="movie-card-image"
        />
      </div>

      <div className="card-content">
        <h2 className="card-content-title">{movie?.title}</h2>
        <p className="card-content-title">{movie?.release_date}</p>

        <div className="card-footer">
          <Link to={`/favorite-movies/${movie?._id}`} className="card-footer-link">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

FavoriteMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default FavoriteMovieCard;

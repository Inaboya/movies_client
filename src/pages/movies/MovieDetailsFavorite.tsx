import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { RootState } from "../../store";
import { getFavoriteMovie } from "../../actions/movies";
import "./movies.css";
import { connect } from "react-redux";
import { starRating } from "../../utils/func";

interface MovieDetailProps {
  movie: any;
  getFavoriteMovie: (id: string) => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  console.log(movie, "movie detail")
  const params = useParams();
  const { id } = params;



  useEffect(() => {
    getFavoriteMovie && getFavoriteMovie(id!);
  }, [id]);
  return (
    <div className="details-container">
      <div className="movie-details-container">
        <div className="movie-details-wrapper">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="{movie.title}"
              className="movie-card-image"
            />
          </div>

          <div className="star-container">
            <p>{starRating(3)}</p>
          </div>

          <div className="movie-details-btn-container">
            <div className="btn-1">
              <button className="btn-details-1">Rate Movie</button>
            </div>

            <div className="btn-2">
              <button className="btn-details-2">
                Remove from Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  getFavoriteMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { getFavoriteMovie })(
  MovieDetail
);

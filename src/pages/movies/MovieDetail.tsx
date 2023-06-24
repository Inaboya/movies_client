import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { RootState } from "../../store";
import { getMovie, getFavoriteMovie } from "../../actions/movies";
import "./movies.css";

const MovieDetail: React.FC = () => {
  const location = useLocation();
  const previousPath = useRef("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (location.pathname !== previousPath.current) {
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/favorite-movies") {
      getFavoriteMovie && getFavoriteMovie(id as string);
    } else {
      getMovie && getMovie(id as string);
    }
  }, [location.pathname, id]);
  return (
    <div className="movie-details-container">
      <div className="movie-details-wrapper">
        <div className="image-container">{/* image  */}</div>

        <div className="movie-details-btn-container">
          <button>Rate Movie</button>
          <button>
            {location.pathname === "/favorite-movies"
              ? "Remove from Watch List"
              : "Add to Watch List"}
          </button>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  movie: state.movies.movie,
});

export default MovieDetail;

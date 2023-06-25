import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Movies from "../../components/Movies";
import "./movies.css";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { getFavoriteMovies } from "../../actions/movies";
import FavoriteMovies from "../../components/FavoriteMovie";

interface FavoriteMovieProps {
  getFavoriteMovies: () => void;
  favoriteMovies: any;
}

const FavoriteMovie: React.FC<FavoriteMovieProps> = ({
  favoriteMovies,
  getFavoriteMovies,
}) => {

  useEffect(() => {
    getFavoriteMovies && getFavoriteMovies();
  }, [getFavoriteMovies]);

  return (
    <>
      <div className="container">
        {favoriteMovies.length === 0 ? (
          <div className="no-fav-wrapper">
            <p className="no-favorite-movies">You have no favorite movies</p>
          </div>
          
        ) : (
          <div className="container-wrapper">
            <FavoriteMovies movies={favoriteMovies} />
          </div>
        )}
      </div>
    </>
  );
};

FavoriteMovie.propTypes = {
  favoriteMovies: PropTypes.array.isRequired,
  getFavoriteMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  favoriteMovies: state.movies.favoriteMovies,
});

export default connect(mapStateToProps, { getFavoriteMovies })(FavoriteMovie);

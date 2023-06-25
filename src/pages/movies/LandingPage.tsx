import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movies";
import Movies from "../../components/Movies";
import "./movies.css";

interface LandingPageProps {
  getMovies: () => void;
  movies: any;
}

const LandingPage: React.FC<LandingPageProps> = ({
  getMovies,
  movies,
}) => {
  useEffect(() => {
    getMovies && getMovies();
  }, [getMovies]);
  return (
    <>
      <div className="container">
        <div className="container-wrapper">
            <Movies movies={movies} />
        </div>
      </div>
    </>
  );
};

LandingPage.propTypes = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { getMovies })(LandingPage);

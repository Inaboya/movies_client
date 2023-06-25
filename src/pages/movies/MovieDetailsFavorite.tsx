import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { RootState } from "../../store";
import { getFavoriteMovie, updateMovieStarRating, deleteFavoriteMovie } from "../../actions/movies";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./movies.css";
import { connect } from "react-redux";
import { starRating } from "../../utils/func";
import Modal from "../../components/Modal";
import { MovieData } from "../../utils/typings";

toast.configure();

interface MovieDetailProps {
  movie: any;
  getFavoriteMovie: (id: string) => void;
  updateMovieStarRating: (form: MovieData) => void;
  deleteFavoriteMovie: (id: string) => void;
}

const MovieDetailsFavorite: React.FC<MovieDetailProps> = ({
  movie,
  getFavoriteMovie,
  updateMovieStarRating,
  deleteFavoriteMovie,
}) => {
  const params = useParams();
  const { id } = params;
  const [showModal, setShowModal] = React.useState(false);
  const [valueRating, setValueRating] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  // call getFavoriteMovie if movie.starRating has been changed

  useEffect(() => {
    getFavoriteMovie && getFavoriteMovie(id!);
  }, [getFavoriteMovie, id, movie?.starRating]);

  const handleModal = () => {
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueRating(Number(e.target.value));
  };

  const handleStarRating = () => {
    setLoading(true);
    updateMovieStarRating({
      movieId: id,
      starRating: valueRating,
    } as MovieData);

    toast.success("Star Rating Updated", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    // getFavoriteMovie && getFavoriteMovie(id!);
    setLoading(false);
    setShowModal(false);
  };

  const handleDelete = () => {
    deleteFavoriteMovie(id!);
    toast.success("Movie Deleted", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    navigate("/");
  }
  return (
    <div className="details-container">
      <div className="movie-details-container">
        {showModal && (
          <div className="modal-container">
            <div className="modal-wrapper">
              <Modal>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating"
                    id="star5"
                    value="5"
                    onChange={handleChange}
                  />
                  <label htmlFor="star5">
                    <i className="fa fa-star fa-2x"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    id="star4"
                    value="4"
                    onChange={handleChange}
                  />
                  <label htmlFor="star4">
                    <i className="fa fa-star fa-2x"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    id="star3"
                    value="3"
                    onChange={handleChange}
                  />
                  <label htmlFor="star3">
                    <i className="fa fa-star fa-2x"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    id="star2"
                    value="2"
                    onChange={handleChange}
                  />
                  <label htmlFor="star2">
                    <i className="fa fa-star fa-2x"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    id="star1"
                    value="1"
                    onChange={handleChange}
                  />
                  <label htmlFor="star1">
                    <i className="fa fa-star fa-2x"></i>
                  </label>
                </div>

                <div className="modal-btn-container">
                  <button className="modal-btn" onClick={handleStarRating}>
                    Rate
                    {loading && (
                      <i
                        className="fas fa-spinner fa-spin"
                        aria-hidden="true"
                      ></i>
                    )}
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        )}
        <div className="movie-details-wrapper">
          <div className="image-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.movieId?.poster_path}`}
              alt="{movie.title}"
              className="movie-card-image"
            />
          </div>

          <div className="star-container">
            <p>{starRating(movie?.starRating)}</p>
          </div>

          <div className="movie-details-btn-container">
            <div className="btn-1">
              <button className="btn-details-1" onClick={handleModal}>
                Rate Movie
              </button>
            </div>

            <div className="btn-2">
              <button className="btn-details-2" onClick={handleDelete}>Remove from Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetailsFavorite.propTypes = {
  movie: PropTypes.object.isRequired,
  getFavoriteMovie: PropTypes.func.isRequired,
  updateMovieStarRating: PropTypes.func.isRequired,
  deleteFavoriteMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  movie: state.movies.favoriteMovie?.favoriteMovie,
});

export default connect(mapStateToProps, {
  getFavoriteMovie,
  updateMovieStarRating,
  deleteFavoriteMovie,
})(MovieDetailsFavorite);

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { RootState } from "../../store";
import {
  getFavoriteMovie,
  updateMovieStarRating,
  deleteFavoriteMovie,
} from "../../actions/movies";
import "./movies.css";
import { connect } from "react-redux";
import { starRating } from "../../utils/func";
import { MovieData } from "../../utils/typings";
import Modal from "../../components/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  console.log(movie, "movie detail");
  const params = useParams();
  const { id } = params;
  const [showModal, setShowModal] = React.useState(false);
  const [valueRating, setValueRating] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getFavoriteMovie && getFavoriteMovie(id!);
  }, [getFavoriteMovie, id]);

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
    setLoading(false);
    setShowModal(false);
  };

  const removeFromFavorite = () => {
    setLoading(true);
    deleteFavoriteMovie(id!);
    toast.success("Movie removed from WatchList", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    navigate("/");
    setLoading(false);
  };
  return (
    <div className="details-container">
      <div className="movie-details-container">
        {showModal && (
          <div className="modal-container">
            <div className="modal-wrapper">
              <Modal>
                <h3 className="modal-rating-heading">Rate this movie</h3>
                <div className="modal-rating-container">
                  <input
                    type="radio"
                    name="rating"
                    onChange={handleChange}
                    style={{ border: "red" }}
                    id="star1"
                    value="1"
                  />
                  <label htmlFor="star1">
                    <i className="fa fa-star fa-2x fa-star-checked"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    onChange={handleChange}
                    id="star2"
                    value="2"
                  />
                  <label htmlFor="star2">
                    <i className="fa fa-star fa-2x fa-star-checked"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    onChange={handleChange}
                    id="star3"
                    value="3"
                  />
                  <label htmlFor="star3">
                    <i className="fa fa-star fa-2x fa-star-checked"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    onChange={handleChange}
                    id="star4"
                    value="4"
                  />
                  <label htmlFor="star4">
                    <i className="fa fa-star fa-2x fa-star-checked"></i>
                  </label>
                  <input
                    type="radio"
                    name="rating"
                    onChange={handleChange}
                    id="star5"
                    value="5"
                  />
                  <label htmlFor="star5">
                    <i className="fa fa-star fa-2x fa-star-checked"></i>
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
              src={`https://image.tmdb.org/t/p/w500${movie?.favoriteMovie?.movieId?.poster_path}`}
              alt="{movie.title}"
              className="movie-card-image"
            />
          </div>

          <div className="star-container">
            <p>{starRating(movie?.favoriteMovie?.starRating)}</p>
          </div>

          <div className="movie-details-btn-container">
            <div className="btn-1">
              <button className="btn-details-1" onClick={handleModal}>
                Rate Movie
              </button>
            </div>

            <div className="btn-2">
              <button className="btn-details-2" onClick={removeFromFavorite}>
                Remove from Favorite{" "}
                {loading && (
                  <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
                )}
              </button>
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
  movie: state.movies.favoriteMovie,
});

export default connect(mapStateToProps, {
  getFavoriteMovie,
  updateMovieStarRating,
  deleteFavoriteMovie,
})(MovieDetailsFavorite);

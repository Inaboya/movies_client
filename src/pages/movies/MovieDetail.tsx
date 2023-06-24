import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { RootState } from "../../store";
import { getMovie, updateMovieStarRating } from "../../actions/movies";
import "./movies.css";
import { connect } from "react-redux";
import { starRating } from "../../utils/func";
import Modal from "../../components/Modal";

interface MovieDetailProps {
  movie: any;
  //   getMovie: (id: string) => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  const params = useParams();
  const { id } = params;
  const [showModal, setShowModal] = React.useState(false);
  const [valueRating, setValueRating] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    getMovie && getMovie(id!);
  }, [id]);

  const handleModal = () => {
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueRating(Number(e.target.value));
  };

  const handleStarRating = () => {
    setLoading(true);
    updateMovieStarRating({ id, valueRating });
    setLoading(false);
    setShowModal(false);
  };

  return (
    <div className="details-container">
      <div className="movie-details-container">
        {showModal && (
          <div className="modal-container">
            <div className="modal-wrapper">
              <Modal>
                <h3 className="modal-rating-heading">
                  Rate Movie from 0 to 5 stars
                </h3>
                <div className="modal-rating-container">
                  <input
                    type="text"
                    name="valueRating"
                    value={valueRating}
                    onChange={handleChange}
                    className="modal-rating-input"
                  />
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
              src={`https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`}
              alt="{movie.title}"
              className="movie-card-image"
            />
          </div>

          <div className="star-container">
            <p className="star-rating-p">{starRating(5)}</p>
          </div>

          <div className="movie-details-btn-container">
            <div className="btn-1">
              <button className="btn-details-1" onClick={handleModal}>Rate Movie</button>
            </div>

            <div className="btn-2">
              <button className="btn-details-2">Add to Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  //   getMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state: RootState) => ({
  movie: state.movies.movie ? state.movies.movie : {},
});

export default connect(mapStateToProps, { getMovie })(MovieDetail);

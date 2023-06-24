import {
  ADD_FAVORITE_MOVIE_FAIL,
  ADD_FAVORITE_MOVIE_SUCCESS,
  DELETE_FAVORITE_MOVIE_FAIL,
  DELETE_FAVORITE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
  GET_FAVORITE_MOVIES_FAIL,
  GET_FAVORITE_MOVIES_SUCCESS,
  GET_FAVORITE_MOVIE_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_FAIL,
  GET_MOVIE_SUCCESS,
  UPDATE_MOVIE_STAR_RATING_FAIL,
  UPDATE_MOVIE_STAR_RATING_SUCCESS,
} from "../actions/actionTypes";
// import { Action } from "../actions/actions";
import { MovieInitialState } from "../utils/typings";

const initialState = {
  movies: [],
  favoriteMovies: [],
  movie: null,
  loading: true,
  error: null,
} as MovieInitialState;

const movieReducer = (state = initialState, action: any) => {
  console.log(action.payload, "where are you?");
  console.log(state, "state");
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.payload.data],
        loading: false,
      };

    case GET_MOVIES_FAIL:
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };

    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case GET_MOVIE_FAIL:
      return {
        ...state,
        movie: null,
        loading: false,
        error: action.payload,
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        loading: false,
      };

    case DELETE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        favoriteMovies: [action.payload, ...state.movies],
        loading: false,
      };

    case ADD_FAVORITE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        favoriteMovies: state.movies.filter((movie) => movie._id !== action.payload),
        loading: false,
      };

    case DELETE_FAVORITE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_FAVORITE_MOVIES_SUCCESS:
      return {
        ...state,
        favoriteMovies: [...action.payload.data],
        loading: false,
      };

    case GET_FAVORITE_MOVIES_FAIL:
      return {
        ...state,
        movies: [],
        loading: false,
      };

    case GET_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        favoriteMovies: action.payload,
        loading: false,
      };

    case UPDATE_MOVIE_STAR_RATING_SUCCESS:
      return {
        ...state,
        favoriteMovies: state.movies.map((movies: any) => {
          if (movies._id === action.payload._id) {
            return {
              ...movies,
              starRating: action.payload.starRating,
            };
          } else {
            return movies;
          }
        }),
        loading: false,
      };

    case UPDATE_MOVIE_STAR_RATING_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default movieReducer;

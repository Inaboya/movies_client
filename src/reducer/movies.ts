import { ADD_FAVORITE_MOVIE_FAIL, ADD_FAVORITE_MOVIE_SUCCESS, DELETE_FAVORITE_MOVIE_FAIL, DELETE_FAVORITE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL, DELETE_MOVIE_SUCCESS, GET_FAVORITE_MOVIES_FAIL, GET_FAVORITE_MOVIES_SUCCESS, GET_FAVORITE_MOVIE_SUCCESS, GET_MOVIES_FAIL, GET_MOVIES_SUCCESS, GET_MOVIE_FAIL, GET_MOVIE_SUCCESS } from "../actions/actionTypes";
// import { Action } from "../actions/actions";
import { MovieInitialState } from "../utils/typings";

const initialState = {
  movies: [],
  movie: null,
  loading: true,
  error: null,
} as MovieInitialState;

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
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
        movie: action.payload,
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
        movie: action.payload,
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
        movies: action.payload,
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
        movies: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default movieReducer;

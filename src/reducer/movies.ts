import { ActionTypes } from "../actions/actionTypes";
import { Action } from "../actions/actions";
import { MovieInitialState } from "../utils/typings";

const initialState = {
  movies: [],
  movie: null,
  loading: true,
  error: null,
} as MovieInitialState;

const movieReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case ActionTypes.GET_MOVIES_FAIL:
      return {
        ...state,
        movies: [],
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case ActionTypes.GET_MOVIE_FAIL:
      return {
        ...state,
        movie: null,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        loading: false,
      };

    case ActionTypes.DELETE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.ADD_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case ActionTypes.ADD_FAVORITE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE_FAVORITE_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };

    case ActionTypes.DELETE_FAVORITE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.GET_FAVORITE_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case ActionTypes.GET_FAVORITE_MOVIES_FAIL:
      return {
        ...state,
        movies: [],
        loading: false,
      };

    case ActionTypes.GET_FAVORITE_MOVIE_SUCCESS:
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

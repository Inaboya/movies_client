// import { Dispatch } from "redux";
import api from "../utils/api";
// import { Action } from './actions';
import { ADD_FAVORITE_MOVIE_FAIL, ADD_FAVORITE_MOVIE_SUCCESS, DELETE_FAVORITE_MOVIE_FAIL, DELETE_FAVORITE_MOVIE_SUCCESS, DELETE_MOVIE_FAIL, DELETE_MOVIE_SUCCESS, GET_FAVORITE_MOVIES_FAIL, GET_FAVORITE_MOVIES_SUCCESS, GET_MOVIES_FAIL, GET_MOVIES_SUCCESS, GET_MOVIE_FAIL, GET_MOVIE_SUCCESS, UPDATE_MOVIE_STAR_RATING_FAIL, UPDATE_MOVIE_STAR_RATING_SUCCESS } from "./actionTypes";

export const getMovies = () => async (dispatch: any) => {
  try {
    const res = await api.get("/movies");
    dispatch({
      type: GET_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: GET_MOVIES_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const getMovie = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.get(`/movies/${id}`);
    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: GET_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const deleteMovie = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.delete(`/movies/${id}`);
    dispatch({
      type: DELETE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: DELETE_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const addFavoriteMovie = (formData: any) => async (dispatch: any) => {
  try {
    const res = await api.put(`/favorite-movies/${formData.id}`);
    dispatch({
      type: ADD_FAVORITE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: ADD_FAVORITE_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const getFavoriteMovies = () => async (dispatch: any) => {
  try {
    const res = await api.get("/favorite-movies");
    dispatch({
      type: GET_FAVORITE_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: GET_FAVORITE_MOVIES_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const deleteFavoriteMovie = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.delete(`/favorite-movies/${id}`);
    dispatch({
      type: DELETE_FAVORITE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: DELETE_FAVORITE_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const updateMovieStarRating =
  (formData: any) => async (dispatch: any) => {
    try {
      const res = await api.patch(`/movies/${formData.id}`, formData);
      dispatch({
        type: UPDATE_MOVIE_STAR_RATING_SUCCESS,
        payload: res.data,
      });
    } catch (err: any) {
      dispatch({
        type: UPDATE_MOVIE_STAR_RATING_FAIL,
        payload: err.response.data.error,
      });
    }
  };

export const getFavoriteMovie = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.get(`/favorite-movies/${id}`);

    dispatch({
      type: ADD_FAVORITE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: ADD_FAVORITE_MOVIE_FAIL,
      payload: error.response.data.error,
    });
  }
};

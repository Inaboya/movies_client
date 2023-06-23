// import { Dispatch } from "redux";
import api from "../utils/api";
// import { Action } from './actions';
import { ActionTypes } from "./actionTypes";

export const getMovies = () => async (dispatch: any) => {
  try {
    const res = await api.get("/movies");
    dispatch({
      type: typeof ActionTypes.GET_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.GET_MOVIES_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const getMovie = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.get(`/movies/${id}`);
    dispatch({
      type: typeof ActionTypes.GET_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.GET_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const deleteMovie = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.delete(`/movies/${id}`);
    dispatch({
      type: typeof ActionTypes.DELETE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.DELETE_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const addFavoriteMovie = (formData: any) => async (dispatch: any) => {
  try {
    const res = await api.put(`/movies/favorite-movies/${formData.id}`);
    dispatch({
      type: typeof ActionTypes.ADD_FAVORITE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.ADD_FAVORITE_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const getFavoriteMovies = () => async (dispatch: any) => {
  try {
    const res = await api.get("/movies/favorite-movies");
    dispatch({
      type: typeof ActionTypes.GET_FAVORITE_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.GET_FAVORITE_MOVIES_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const deleteFavoriteMovie = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.delete(`/movies/favorite-movies/${id}`);
    dispatch({
      type: typeof ActionTypes.DELETE_FAVORITE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: typeof ActionTypes.DELETE_FAVORITE_MOVIE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const updateMovieStarRating =
  (formData: any) => async (dispatch: any) => {
    try {
      const res = await api.patch(`/movies/${formData.id}`, formData);
      dispatch({
        type: typeof ActionTypes.UPDATE_MOVIE_STAR_RATING_SUCCESS,
        payload: res.data,
      });
    } catch (err: any) {
      dispatch({
        type: typeof ActionTypes.UPDATE_MOVIE_STAR_RATING_FAIL,
        payload: err.response.data.error,
      });
    }
  };


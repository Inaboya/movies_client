// import { Dispatch } from "redux";
import api from "../utils/api";
// import { Action } from './actions';
import {
  ADD_FAVORITE_MOVIE_FAIL,
  ADD_FAVORITE_MOVIE_SUCCESS,
  DELETE_FAVORITE_MOVIE_FAIL,
  DELETE_FAVORITE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
  GET_FAVORITE_MOVIES_FAIL,
  GET_FAVORITE_MOVIES_SUCCESS,
  GET_FAVORITE_MOVIE_FAIL,
  GET_FAVORITE_MOVIE_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_FAIL,
  GET_MOVIE_SUCCESS,
  UPDATE_MOVIE_STAR_RATING_FAIL,
  UPDATE_MOVIE_STAR_RATING_SUCCESS,
} from "./actionTypes";

import { MovieData } from "../utils/typings";

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
  // console.log(id, "id");
  try {
    const res = await api.get(`/movies/${id}`);
    // console.log(res.data.data[0], "res.data");
    dispatch({
      type: GET_MOVIE_SUCCESS,
      payload: res.data.data[0],
    });
  } catch (err: any) {
    console.log("error");
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

export const addFavoriteMovie =
  (formData: MovieData) => async (dispatch: any) => {
    const { movieId, starRating } = formData;
    try {
      const res = await api.post(`/favorite-movies`, { movieId, starRating });
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
    // console.log(res.data.data, "res.data");
    dispatch({
      type: GET_FAVORITE_MOVIES_SUCCESS,
      payload: res.data.data,
    });
  } catch (err: any) {
    console.log(err, "err");
    dispatch({
      type: GET_FAVORITE_MOVIES_FAIL,
      // payload: err.response.data.error,
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
  (formData: MovieData) => async (dispatch: any) => {
    try {
      const res = await api.patch(
        `/favorite-movies/${formData.movieId}`,
        formData
      );
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

    // console.log(res.data, "res.data");

    dispatch({
      type: GET_FAVORITE_MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: GET_FAVORITE_MOVIE_FAIL,
      payload: error.response.data.error,
    });
  }
};

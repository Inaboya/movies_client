import React, { useEffect } from "react";
import "./App.css";
import {  useDispatch } from "react-redux";
import store, { AppDispatch } from "./store";
import { loadUser } from "./actions/auth";
import { ActionTypes } from "./actions/actionTypes";
import setAuthToken from "./utils/setAuthToken";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    dispatch(loadUser);

    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch({ type: ActionTypes.LOGOUT_USER });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h1>hello world</h1>;
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App.js";
import Profil from "./Profil.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Fortschritt from "./Fortschritt.js";
import Rezepte from "./RezeptePage.js";
import Auth from "./components/AUTH/Auth.js";
import Tagebuch from "./Tagebuch.js";
// import Tracker from "./Tracker.js";

import PostDetails from "./components/PostDetails/PostDetails.jsx";
import reducers from "./reducers";
import { createRoot } from "react-dom/client";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

const Routs = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/profil" element={<Profil />}></Route>
        <Route exact path="/fortschritt" element={<Fortschritt />}></Route>
        <Route exact path="/rezepte" element={<Rezepte />}></Route>
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/recipes/search" element={<Rezepte />} />
        <Route exact path="/Rezepte/:id" element={<PostDetails />}></Route>
        <Route exact path="/tagebuch" element={<Tagebuch />}></Route>
      </Routes>
    </Router>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Routs />
  </Provider>
);

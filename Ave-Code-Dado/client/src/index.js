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
import Fruestueck from "./Fruehstueck.js";
import Mittagessen from "./Mittag.js";
import Abendessen from "./Abendessen.js";
import Snack from "./Snack.js";
import Aktivitaeten from "./Aktivitaeten.js";
import Gewicht from "./Gewicht.js";
import PostDetails from "./components/PostDetails/PostDetails";
// import * as serviceWorker from './serviceWorker';
import reducers from "./reducers";
import { createRoot } from "react-dom/client";
import RezeptePage from "./RezeptePage.js";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
const user = JSON.parse(localStorage.getItem("profile"));

const Routs = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/profil" element={<Profil />}></Route>
        <Route exact path="/fortschritt" element={<Fortschritt />}></Route>
        <Route exact path="/rezepte/*" element={<Rezepte />}></Route>
        <Route exact path="/auth" element={<Auth />}></Route>
        <Route exact path="/recipes/search" element={<Rezepte />} />
        <Route exact path="/recipes/:id" element={<PostDetails />} />
        <Route exact path="/tagebuch" element={<Tagebuch />}></Route>
        <Route exact path="/addFruehstueck" element={<Fruestueck />}></Route>
        <Route exact path="/addMittagessen" element={<Mittagessen />}></Route>
        <Route exact path="/addAbendessen" element={<Abendessen />}></Route>
        <Route exact path="/addSnack" element={<Snack />}></Route>
        <Route exact path="/addAktivitaeten" element={<Aktivitaeten />}></Route>
        <Route exact path="/addGewicht" element={<Gewicht />}></Route>
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

import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import * as actionType from "./constants/actionTypes";
import useStyles from "./styles";
import "./App.css";

function HeaderMobile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <a href="/" className="brand-logo-header center">
              Av-Code-Dado
            </a>

            <a
              href="#"
              className="sidenav-trigger button-collapse"
              data-target="slide_out"
            >
              <i className="material-icons">menu</i>
            </a>

            <div className="signIn right">
              {user?.result ? (
                <div className={classes.profile}>
                  <Button
                    variant="contained"
                    className={classes.logout}
                    color="secondary"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  className={classes.logout}
                  component={Link}
                  to="/auth"
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="slide_out">
        <li>
          <div className="user-view">
            <div className="background green"></div>
            <a href="#user">
              {/* <img className="circle" src="images/yuna.jpg" /> */}
            </a>
            <a href="#name">{/* <Typography>{user.name}</Typography> */}</a>
            <a href="#email">
              <span className="white-text email">Schön, dich zu sehen!</span>
            </a>
          </div>
        </li>
        <li>
          {" "}
          <a href="/fortschritt">Fortschritt </a>
        </li>
        <li>
          {" "}
          <a href="/rezepte">Rezepte </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMobile;

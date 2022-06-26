import React, { useState, useEffect } from "react";
import { Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import * as actionType from "./constants/actionTypes";
import useStyles from "./styles";

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate.push("/auth");

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
    <nav>
      <div className="nav-wrapper z-depth-1">
        <a href="/" className="brand-logo center">
          Av-Code-Dado
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="/profil">Profil</a>
          </li>
          <li>
            <a href="/fortschritt">Fortschritt</a>
          </li>
          <li>
            <a href="/Rezepte">Rezepte</a>
          </li>
          <li>
            <a href="/tagebuch">Tagebuch</a>
          </li>
        </ul>
        <li className="signIn right">
          <Toolbar className={classes.toolbar}>
            {user?.result ? (
              <div className={classes.profile}>
                {/* <Avatar
                  className={classes.purple}
                  alt={user?.result.name}
                  src={user?.result.imageUrl}
                >
                  {user?.result.name.charAt(0)}
                </Avatar> */}
                {/* <Typography className={classes.userName} variant="h6">
                  {user?.result.name}
                </Typography> */}
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
                component={Link}
                to="/auth"
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            )}
          </Toolbar>
        </li>
      </div>
    </nav>
  );
};

export default Header;

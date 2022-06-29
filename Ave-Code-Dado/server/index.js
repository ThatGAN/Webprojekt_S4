const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const connection = require("./db");
const userRouter = require("./routes/user.js");
const recipesRoutes = require("./routes/recipes.js");
const session = require("express-session");
require("dotenv").config();

const app = express();
const sessionConfig = {
  secret: "MYSECRET",
  name: "Ave-code-dado",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "none",
    secure: true, // THIS is the config you are looing for.
  },
};

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());
app.use(session(sessionConfig));

connection();

//routes
app.use("/recipes", recipesRoutes);
app.use("/user", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}...`));

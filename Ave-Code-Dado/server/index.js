const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const recipesRoutes = require("./routes/recipes.js");
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.use("/recipes", recipesRoutes);
connection();

// const CONNECTION_URL =
//   "mongodb+srv://ThatGAN:ThatGAN123@cluster0.kejqs.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, console.log(`Listening on port ${port}...`));
// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true /*useUnifiedToplogy: true */,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
//   )
//   .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

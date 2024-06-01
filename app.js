const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
require("dotenv").config();
require("./config/database");
require("./config/passport");
const ensureLoggedIn = require("./config/ensureLoggedIn");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3001;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use("/", require("./routes/index"));

app.use("/movement", ensureLoggedIn, require("./routes/movement"));
app.use("/sleep", ensureLoggedIn, require("./routes/sleep"));

app.use("/mindfulness", ensureLoggedIn, require("./routes/mindfulness"));
app.use("/weekOverview", ensureLoggedIn, require("./routes/weekOverview"));

app.get("/", (req, res) => res.type("html").send(html));

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

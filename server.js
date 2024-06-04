const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helper");
const sequelize = require("./config/connection");
const routes = require("./routes/index");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};
app.use(session(sess));

// Handlebars setup
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// Server start and database sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on localhost:" + PORT));
});

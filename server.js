const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helper");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Route imports
const viewRoutes = require("./routes/viewRoutes");
const userRoutes = require("./routes/api/userRoutes");
const loginRoutes = require("./routes/api/loginRoutes");
const signupRoutes = require("./routes/api/signupRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars setup
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");


const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};
app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Route usage
app.use("/", viewRoutes);
app.use("/", userRoutes);
app.use('/', loginRoutes);
app.use('/', signupRoutes);

// Server start and database sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on localhost:" + PORT));
});

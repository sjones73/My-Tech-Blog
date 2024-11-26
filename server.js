const express = require("express");
const exphbs = require("express-handlebars");

const path = require("path")
const renderRoutes = require("./controllers/renderRoutes")
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// handlebars setup
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars")

app.use("/", renderRoutes)


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
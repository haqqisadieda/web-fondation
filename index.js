const express = require("express");
const path = require("path");

const app = express();
let PORT = process.env.PORT || 3000;

//template engine setup

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/program", (req, res) => {
  res.render("program.ejs");
});

app.get("/*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Aplikasi ini running di : ${PORT}`);
});

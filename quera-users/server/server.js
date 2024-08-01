const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    id: 1,
    name: "ماهان جعفری",
    email: "mahan@gmail.com",
    birthdate: "2000-04-18",
    occupation: "فرانت‌اند دولوپر",
  },
  {
    id: 2,
    name: "سالار نیلی",
    email: "salar@gmail.com",
    birthdate: "2004-06-05",
    occupation: "فرانت‌اند دولوپر",
  },
  {
    id: 3,
    name: "محمدسینا غلامی",
    email: "msina@gmail.com",
    birthdate: "2001-11-09",
    occupation: "مهندس نرم‌افزار",
  },
  {
    id: 4,
    name: "گلاره وحدت",
    email: "gelareh@yahoo.com",
    birthdate: "2002-03-22",
    occupation: "طراح گرافیک",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3500, () => {
  console.log("Server listening on port 3500");
});

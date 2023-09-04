const path = require("path");
const Sequelize = require("sequelize");
const User = require("../models/user");

exports.getHomePage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "public", "views", "index.html"));
};

exports.addUser = (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;

  User.create({
    name: name,
    phone: phone,
    email: email,
  })
    .then((result) => {
      console.log("Added to User");
      res.redirect("/get");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json(users);
      // console.log(users);
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;
  User.findByPk(userId)
    .then((user) => {
      return user.destroy();
    })
    .then((result) => res.redirect("/get"))
    .catch((err) => console.log(err));
};

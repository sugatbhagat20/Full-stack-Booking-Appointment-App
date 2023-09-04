const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.use(express.static("public"));

router.get("/", userController.getHomePage);

router.get("/users", userController.getUsers);

router.post("/addUser", userController.addUser);

router.get("/deleteUser/:id", userController.deleteUser);

module.exports = router;

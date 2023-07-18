const router = require("express").Router();
const loginController = require("../controllers/login.controller");

router.post("/:id", loginController.login);

module.exports = router;

const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/create-user", userController.postCreateUser);
router.post("/login", userController.postLogin);
router.get("/get-session", userController.getSession);
router.post("/logout", userController.postLogout);

module.exports = router;

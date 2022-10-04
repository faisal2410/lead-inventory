/**
 * Note: This route is used for signup/login without email sent to the user. But user-demo.js file
 * is used for signup/login user after sending confirmation email
 * 
 * 
 * */ 
const express = require("express");
const {signup,confirmEmail,login,getMe} = require("../controllers/user");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();



router.post("/signup",signup);
router.get("/signup/confirmation/:token", confirmEmail);

router.post("/login", login);

router.get("/me", verifyToken, getMe);


module.exports = router;
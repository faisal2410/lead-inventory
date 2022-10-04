const express = require("express");
const {signup,confirmEmail,login,getMe} = require("../controllers/user");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();



router.post("/signup",signup);
router.get("/signup/confirmation/:token", confirmEmail);

router.post("/login", login);

router.get("/me", verifyToken, getMe);


module.exports = router;
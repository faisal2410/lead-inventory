const express = require("express");
const {signup,login,getMe} = require("../controllers/user");
const router = express.Router();
const {requireSignin,isAdmin}=require("../middleware/authorization")



router.post("/signup",signup);


router.post("/login", login);

router.get("/me", requireSignin, getMe);


module.exports = router;
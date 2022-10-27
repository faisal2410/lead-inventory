const express = require("express");
const {createBrand,getBrands,getBrandById,updateBrand} = require("../controllers/brand");
const {requireSignin,isAdmin}=require("../middleware/authorization")
const router = express.Router();

router.get("/brand",getBrands);
router.post("/brand",requireSignin, isAdmin,createBrand);
// router.post("/brand",createBrand);

router.get("/brand/:id",getBrandById);
router.patch("/brand/:id",updateBrand)

module.exports = router;
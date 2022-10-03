const express = require("express");
const {createBrand,getBrands,getBrandById,updateBrand} = require("../controllers/brand");

const router = express.Router();

router.get("/brand",getBrands);
router.post("/brand",createBrand)

router.get("/brand/:id",getBrandById);
router.patch("/brand/:id",updateBrand)




module.exports = router;
const express = require("express");
const {createBrand,getBrands,getBrandById,updateBrand} = require("../controllers/brand");

const router = express.Router();

router.get("/",createBrand);
router.post("/",getBrands)

router.get("/:id",getBrandById);
router.patch("/:id",updateBrand)




module.exports = router;
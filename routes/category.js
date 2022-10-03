const express = require("express");
const router = express.Router();
const {getCategories,createCategory} = require("../controllers/category");

router.get("/categories",getCategories);
router.post("/category",createCategory)


module.exports = router;

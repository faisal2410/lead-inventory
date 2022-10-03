const express = require("express");
const {createSupplier,getSuppliers,getSupplierById,updateSupplier} = require("../controllers/supplier");

const router = express.Router();

router.get("/",getSuppliers);
router.post("/",createSupplier)

router.get("/:id",getSupplierById);
router.patch("/:id",updateSupplier);

module.exports = router;
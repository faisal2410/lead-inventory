const express = require("express");
const {createSupplier,getSuppliers,getSupplierById,updateSupplier} = require("../controllers/supplier");

const router = express.Router();

router.get("/suppliers",getSuppliers);
router.post("/supplier",createSupplier)

router.get("/supplier/:id",getSupplierById);
router.patch("/supplier/:id",updateSupplier);

module.exports = router;
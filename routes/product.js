const express=require('express')
const router=express.Router()
const {getProducts,getProduct,createProduct,updateProductById,bulkUpdateProduct,deleteProductById,bulkDeleteProduct,fileUpload}=require("../controllers/product")

const uploader = require("../middleware/uploader");

router.post("/file-upload", uploader.array("image"), fileUpload);
router.patch("/bulk-update",bulkUpdateProduct);
router.delete("/bulk-delete", bulkDeleteProduct)


router.get("/products",getProducts);
router.post("/product",createProduct);

router.get("/product/:id",getProduct)
router.patch("/product/:id",updateProductById);
router.delete("/product/:id",deleteProductById)



module.exports=router
const express=require('express')
const router=express.Router()
const {getProducts,getProduct,createProduct,updateProductById,bulkUpdateProduct,deleteProductById,bulkDeleteProduct}=require("../controllers/product")


router.patch("/bulk-update",bulkUpdateProduct);
router.delete("/bulk-delete", bulkDeleteProduct)


router.get("/",getProducts);
router.post("/",createProduct);

router.get("/:id",getProduct)
router.patch("/:id",updateProductById);
router.delete("/:id",deleteProductById)



module.exports=router
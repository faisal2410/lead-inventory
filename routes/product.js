const express=require('express')
const router=express.Router()
const {getProducts,createProduct,updateProductById,bulkUpdateProduct,deleteProductById,bulkDeleteProduct}=require("../controllers/product")


router.patch("/bulk-update",bulkUpdateProduct);
router.delete("/bulk-delete", bulkDeleteProduct)


router.get("/",getProducts);
router.post("/",createProduct);

router.patch("/:id",updateProductById);
router.delete("/:id",deleteProductById)



module.exports=router
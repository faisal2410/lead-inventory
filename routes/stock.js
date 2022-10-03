const express=require('express')
const router=express.Router()
const {getStocks,getStockById,createStock} = require('../controllers/stock')


// router.route("/bulk-update").patch(stockController.bulkUpdateProduct);
// router.route("/bulk-delete").delete(stockController.bulkDeleteProduct);

router.get("/",getStocks);
router.post("/",createStock);
router.get("/:id",getStockById)


// router.route("/:id")
// .get(stockController.getStockById)
// .patch(stockController.updateStockById)
// .delete(stockController.deleteStockById)

module.exports = router;
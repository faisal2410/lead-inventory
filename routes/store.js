const express = require("express");
const router = express.Router();
const {getStores,createStore,getStoreById} = require("../controllers/store");

router.get("/",getStores);
router.post("/",createStore);
router.get("/:id",getStoreById)




  module.exports = router;

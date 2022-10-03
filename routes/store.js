const express = require("express");
const router = express.Router();
const {getStores,createStore,getStoreById} = require("../controllers/store");

router.get("/stores",getStores);
router.post("/store",createStore);
router.get("/store/:id",getStoreById)




  module.exports = router;

const router = require("express").Router();

router.get("/",(req,res)=>{
    res.status(200).json({
        status: 200,
        message:"Welcome to Lead Inventory Management System"
    })
})

module.exports = router;
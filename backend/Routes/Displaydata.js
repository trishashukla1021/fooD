const express = require('express')
const router = express.Router();
router.post('/foodData',async(req,res)=>{
    try{
        res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
         res.send([global.food_items,global.foodCategory])
    }
    catch(error){
             console.error(error.message);
             res.send("server error")
    }
});
module.exports =router;
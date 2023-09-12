const router = require('express').Router();
const registercurd = require('../models/registerM')

router.post("/",async function(req,res){
    await registercurd.create(req.body)
    res.send("Register Successfully!")
})
router.get("/",async function(req,res){
    var registerrstd = await registercurd.find()
    res.json(registerrstd)
})
router.put("/",async function(req,res){
    await registercurd.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.send("Updated Successfully!")
})
router.get("/",async function(req,res){
    await registercurd.findByIdAndDelete(req.query.id)
    res.send("Deleted Successfully!")
})


module.exports = router
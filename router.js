const express=require('express');
const route=express.Router();
const infoschema=require('./schema.js');
route.post('/',(req,res) =>{

    console.log('.............',req.body)
    const data = new infoschema({
        Notes:req.body.Notes.Notes
        
    })
    console.log("data----------------->",data);
    data.save();
    res.json(data);
})
route.get('/',async (req,res)=>{
    var find=await infoschema.find();
    res.json(find);
})
route.put('/update',async (req,res)=>{
    var update=await infoschema.update({_id:req.body.Notes._id},{$set:{
        Notes:req.body.Notes.Notes
    }})

    res.json(update);
})
route.delete('/delete/:id',async(req,res)=>{
    
    var del=await infoschema.findByIdAndRemove(req.params.id).then(e=>{
        res.json({message:"deleted"});
    })
})
module.exports=route;
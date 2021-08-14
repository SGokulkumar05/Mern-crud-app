const mongoose=require("mongoose");
const infoschema = mongoose.Schema({
    Notes:{
        type:String,
        required:true
    },
    Time:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("Info",infoschema);
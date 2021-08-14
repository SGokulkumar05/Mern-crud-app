const express=require('express');
const mongoose=require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
app=express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',require('./router.js'));
app.listen(process.env.PORT || 5000,(err)=>{
    if(!err){
        console.log("server is running at port 5000");
    }
    else{console.log(err);}
})
app.use(express.static("client/build"));
app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
mongoose.connect('mongodb+srv://gokul:gokul@cluster0.kqrgd.mongodb.net/mern?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true  },(err)=>{
    if(!err){
        console.log("Database connected Suscessfully");
    }
    else{console.log(err);}
})
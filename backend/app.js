const express=require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app=express();
const jwt=require('jsonwebtoken')

var jsonParser = bodyParser.json()
var mongoose=require('mongoose')
var admin=require('./routes/admin')
var db=mongoose.connect("mongodb://localhost:27017/shopping_site", {useNewUrlParser: true, useUnifiedTopology: true });

var urlencodedParser = bodyParser.urlencoded({ extended: true})
app.use(bodyParser.json({type:''}))
app.use(cors());
const port=7000||process.env.PORT;
app.use(admin)
app.use('/public',express.static("./public"));



app.listen(port,()=>{
    console.log(`port started at ${port}`)
})

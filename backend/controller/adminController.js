'use strict'

const User = require('../models/user.js')
const obj={"title":'India',"content":'The best country'}
const jwt=require('jsonwebtoken')  


exports.getHome = (req,res)=>{
   
        res.send("hello")

    
   
    
}

exports.register=(req,res)=>{
    console.log(req.body)
    var user=new User({
        Email:req.body.regData.regEmail,
        Name:req.body.regData.regName,
        Password:req.body.regData.regPassword
    })
    User.findOne({Email:req.body.regData.regEmail},(err,obj)=>{
       if(!obj){
        user.save((err)=>{
            if(!err)
            {
                console.log("saved in user database")
                
            }
            else{
                console.log(err)
                
            }
        })
       // let resObj={status:true}
        res.send(obj)
        }
        else{
            //let resObj={status:false}
            res.send(obj)
        }
    
    })
    
}

exports.userLoginConf=(req,res)=>{
    console.log(req.body)
    User.findOne({Email:req.body.loginData.email},(err,obj)=>{
       let r={Obj:obj}
        console.log(obj)
        
        res.send(obj)
    })

}


const mongoose = require('mongoose');
const schema=mongoose.Schema;

const User=new schema({
    Name : {
        type : String,
        required : true
    },

    Email : {
        type : String,
        required : true 
    },
    Password:{
        type: String,
        required: true
    },
    Cart:[{
        type:String
    }]
    
})

module.exports=mongoose.model("User",User);



/*
 
 Bio:{
        type: String,
    },
    Following:[{
        _id:{
            type: String,
            required: true
        }
    }],
    Followers:[{
        _id:{
            type: String,
            required: true
        }
    }]
 */
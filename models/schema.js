const mongoose=require("mongoose");

const studentSchema =new mongoose.Schema({
    fname:{
       type:String,
       required : true, 
    },
    lname:{
        type:String,
        required : true, 
     },
    email:{
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
        unique: true,
     },
    roll:{
        type:Number,
        required : true, 
        unique: true,
     },
    gender:{
        type:String,
        required : true,
        enum:{
            values:["MALE","FEMALE","OTHERS"],
            message:`{VALUE} doesn't exist`
        }
     },
    department:{
        type:String,
        required : true, 
        enum:{
            values:["CSE","IT","CSBS","EE","ECE","ME","CE"],
            message:`{VALUE} doesn't exist`
        }
     },
    cgpa:{
        type: Number,
        required: true,
        min: 5,
        max: 10
     },
    
})


module.exports= mongoose.model('Student', studentSchema)


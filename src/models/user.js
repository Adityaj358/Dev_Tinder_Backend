const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength:2,
        maxLength:50,
    },

    lastName : {
        type : String,
    },

    email : {
        type : String,
        required : true,
        unique:true,
        lowercase : true,
    },

    password : {
        type : String,
        required:true,
    },

    age : {
        type : Number,
        min:18,
        max:60,
    },

    gender : {
        type : String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender is not valid")
            }
        }
    },

    photoUrl : {
        type: String
    },
    
    about : {
        type: String,
        default: "This appliction for SDE",
    },

    skills:{
        type:[String]
    }
},{
    timestamps:true
});


module.exports =  mongoose.model("User" , userSchema)
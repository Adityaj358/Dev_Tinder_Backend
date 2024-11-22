const mongoose = require("mongoose")
const validator = require("validator")
const { default: isEmail } = require("validator/lib/isEmail")

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
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid Email Address" + value)
            }
        }
    },

    password : {
        type : String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong Password:" + value)
            }
        }
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
        type: String,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("invalid Photo URL" + value)
            }
        }
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
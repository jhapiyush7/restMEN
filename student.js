const mongoose=require("mongoose");
const validator=require("validator");
const { default: isEmail } = require("validator/lib/isemail");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5
    },
    email:{
        type:String,
        required:true,
        unique:[true,"This email is already in use"],
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("wrong email")
        }
    },
    phone:{
        type:String,
        minlength:10,
        maxlength:10
    },
    address:{
        type:String
    }
}
)

const Student=new mongoose.model('Student',studentSchema);
module.exports=Student;
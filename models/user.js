import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
      required:true,
      unique:true,
    },
    password:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model("cruds", userSchema);
export default userModel;
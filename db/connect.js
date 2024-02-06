import mongoose from "mongoose";

const connectDB =()=>{
    mongoose.connect(process.env.DB_URL);


    mongoose.connection.on('connected', ()=>{
        console.log("Database Connected SuccesFully")
    })
    mongoose.connection.on('error', ()=>{
        console.log("Database Connected Error")
    })
    mongoose.connection.on('disconnected', ()=>{
        console.log("Database disConnected SuccesFully")
    })
}

export default connectDB;
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type:String, 
    },
    lastName : {
        type:String,
    },
    email :{
        type:String,
    },
    password: {
        type:String,
    },
    phone: {
        type:String,
    },
    adress: {   
        type: String,
    },
    // image: {
    //     type:base64
    // }
    isAdmin: {
        type:Boolean,
    }
})
const schema = mongoose.model("User", userSchema);
export default schema;
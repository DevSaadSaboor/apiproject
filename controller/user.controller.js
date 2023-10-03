import User from "../models/user.models.js";


export const createUser = async(req,res)=> {
    try {
        const {firstName,lastName,email,password,phone,adress,isAdmin} = req.body;
        if(!firstName || !lastName || !email || !password || !phone || !adress || !isAdmin) {
                res.status(400).json({message: "All field are Mandotary"})
        }
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            phone,
            adress,
            isAdmin
        })
        await newUser.save();
        res.status(200).json(newUser)
    }catch(err) {
        console.log(err);
        res.status(400).json({message:"Eror"})
    }
};


export const getAllUsers = async(req, res) => {
    try{
        const users = await User.find();
        if(users){
            res.status(200).json(users)
        }
    } catch (error){
            res.status(500).json({message: "Error"})
    }
}

export const updateSingleUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body,{
            new:true
        })
        if(user){
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(400).json({message: "Got an Error in Catch Block"})
    }
}
export const deleteSingleUser = async(req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id, req.body,{
            new:true
        })
        if(user) {
            res.status(200).json(user)
        }
}   catch(err) {
    res.status(400).json({message:"Got error in Catch block"})
    } 
}


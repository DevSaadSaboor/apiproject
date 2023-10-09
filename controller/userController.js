import User from "../models/userModels.js";
import { getUsers } from "../services/UserServices.js"
import * as userService from "../services/UserServices.js"




export const createUser = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, password, phone, address, isAdmin } = req.body;

    const newUser = await userService.createUser({
      userName,
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
      isAdmin,
    });

    res.status(200).json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};
// Create User
// export const createUser = async (req, res) => {
//   try {
//     const { userName,firstName, lastName, email, password, phone, adress, isAdmin } =  req.body;

//     const existingUser = await User.findOne({ email: email, userName:userName, phone:phone });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email is already in use.' });
//     } 
//     const newUser = new User({
//       userName:userName,
//       firstName:firstName,
//       lastName:lastName,
//       email:email,
//       password:password,
//       phone:phone,
//       adress:adress,
//       isAdmin:isAdmin
//     });
//     // console.log(newUser);  
//     await newUser.save();
//     res.status(200).json(newUser);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Eror" });
//   }
// };

// Get all Users 
export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();    //find()
    if (users) {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: "Error" });
  }
};

// Update Single User 
export const updateSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await userService.updateSingleUser(id, req.body);

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};


// export const updateSingleUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (user) {
//       res.status(200).json(user);
//     }
//   } catch (error) {
//     res.status(400).json({ message: "Got an Error in Catch Block" });
//   }
// };

// Delete Single User 

export const deleteSingleUser = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    return user;
  } catch (error) {
    throw new Error('Error deleting user.');
  }
};
// export const deleteSingleUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findByIdAndDelete(id, req.body, {
//       new: true,
//     });
//     if (user) {
//       res.status(200).json(user);
//     }
//   } catch (err) {
//     res.status(400).json({ message: "Got error in Catch block" });
//   }
// };

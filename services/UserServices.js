import User from "../models/userModels.js";

export const getUsers = async function getUsersAll() {
    return await User.find();
};

export const checkUserExistence = async ({ email, userName, phone }) => {
    const existingUser = await User.findOne({ email, userName, phone });
    return existingUser;
};

export const createUser = async ({
    userName,
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    isAdmin,
}) => {
    try {
        const existingUser = await checkUserExistence({ email, userName, phone });

        if (existingUser) {
            throw new Error("Email, username, or phone number is already in use.");
        }

        const newUser = new User({
            userName,
            firstName,
            lastName,
            email,
            password,
            phone,
            address,
            isAdmin,
        });

        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error("Error creating user.");
    }
};

export const updateSingleUser = async (userId, userData) => {
    try {
        const user = await User.findByIdAndUpdate(userId, userData, {
            new: true,
        });
        return user;
    } catch (error) {
        throw new Error("Error updating user.");
    }
};

export const deleteSingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userService.deleteSingleUser(id);

        if (deletedUser) {
            res.status(200).json(deletedUser);
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ error: error.message });
    }
};

import { User } from "../models/userModel.js";
import getUserDetailsFromToken from "../helpers/getUserDetailsFromToken.js";


export const updateUserDetails = async (req, res) => {
    try {
        const token = req.cookies.token || '';

        const user = await getUserDetailsFromToken(token);

        const {name, profile_pic} = req.body;

        const updatedUser = await User.updateOne({ _id: user._id }, { name, profile_pic });

        const userInformation = await User.findById(user._id);

        return res.status(200).json({
            message: "User Details Updated",
            data: userInformation,
            success: true
        });
 

    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    }
};
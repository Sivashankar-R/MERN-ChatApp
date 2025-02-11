import { User } from "../models/userModel.js";

export const checkEmail = async (req, res) => {
    try {
        const { email } = req.body;

        const checkEmail = await User.findOne({ email }).select('-password'); 
        
        if(!checkEmail){
            return res.status(400).json({ message: 'Email does not exist' });
        }

        return res.status(200).json(checkEmail);
}catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
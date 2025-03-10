import { User } from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'; 

export const checkPassword = async (req, res) => {
    try {
        const { password, userId } = req.body;

        const user = await User.findById(userId);

        const verifyPassword = await bcryptjs.compare(password, user.password);

        if(!verifyPassword) {
            return res.status(400).json({
                message: "Password is incorrect",
                error: true
            });
        }

        const tokenData = {
            userId: user._id,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });

        const cookieOptions = {
            http: true,
            secure: true
        }

        return res.cookie('token', token,cookieOptions).status(200).json({
            message: "Login Successful",
            token: token,
            success: true
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
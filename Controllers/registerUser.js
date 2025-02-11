import bcryptjs from 'bcryptjs';
import { User } from '../models/userModel.js';

export const registerUser = async (req, res) => {
    try {
        const {name, email, password, profile_pic} = req.body;

        const checkEmail = await User.findOne({email});

        if(checkEmail){
            return res.status(400).json({message: 'Email already exists'});
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const payload = {
            name,
            email,
            password: hashedPassword,
            profile_pic
        }

        const user = new User(payload);
        const newUser = await user.save();

        return res.status(201).json({message: 'User registered successfully', newUser});
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
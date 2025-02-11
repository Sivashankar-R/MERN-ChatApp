import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';

const getUserDetailsFromToken = async (token) => {
    if(!token){
        return{
            message: "Session Out",
            logout: true    
        }
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decode.userId).select('-password');

    return user;

    
}

export default getUserDetailsFromToken;
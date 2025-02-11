import  getUserDetailsFromToken  from "../helpers/getUserDetailsFromToken.js";


export const userDetails = async (req, res) => {
    try {
        const token = req.cookies.token || '';
        
        console.log("token : ",token);
       const user = await getUserDetailsFromToken(token);
       console.log("User : ",user)

        return res.status(200).json({
            message: "User Details",
            data: user
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

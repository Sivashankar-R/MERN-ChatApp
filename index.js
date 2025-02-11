import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userRoutes from './routers/userRouter.js';
import cookieParser from 'cookie-parser';   


const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());



app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

const PORT = process.env.PORT || 8080;

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

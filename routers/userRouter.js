import express from 'express';
import { registerUser } from '../Controllers/registerUser.js';
import { checkEmail } from '../Controllers/checkEmail.js';
import { checkPassword } from '../Controllers/checkPassword.js';
import { userDetails } from '../Controllers/userDetails.js';
import { logout } from '../Controllers/logout.js';
import { updateUserDetails } from '../Controllers/updateUserDetails.js';


const router = express.Router();

router.post('/register', registerUser);

router.post('/email', checkEmail);

router.post('/password', checkPassword);

router.get('/user-details', userDetails);

router.get('/logout', logout );

router.post('/update-user', updateUserDetails);

export default router;
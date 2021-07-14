import express  from 'express' ;
const router = express.Router();
import { registerUser,loginUser,getUserProfile,updateUserProfile,getUsers } from '../controllers/userController.js';
import { auth } from '../middleware/authMiddleware.js';

router.route('/').get(getUsers);
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/user/profile/:id').get(auth,getUserProfile);
router.route('/user/update/profile/:id').put(auth,updateUserProfile);

export default router;
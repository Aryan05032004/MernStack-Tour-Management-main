import express from 'express';
import { deleteUser,getSingleUser,updateUser,getAllUsers} from '../controllers/userController.js';
const router = express.Router()

import { verifyAdmin } from '../utils/verifyToken.js';

// Route to update an existing tour
router.put('/:id',verifyUser, updateUser);
import { verifyUser } from '../utils/verifyToken.js';

// Route to delete a tour
router.delete('/:id',verifyUser, deleteUser);  // Corrected the route to include :id

// Route to get a single user
router.get('/:id', verifyUser, getSingleUser);

// Route to get all tours
router.get('/', verifyAdmin,getAllUsers);


export default router;
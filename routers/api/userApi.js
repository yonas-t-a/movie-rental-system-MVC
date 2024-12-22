import express from 'express';

import {
    getUsers,
    getUserID,
    createUser,
    updateUser,
    deleteUser
} from '../../controller/userController.js'

const router = express.Router();

router.route('/')
    .get(getUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser)
router.route('/:id')
    .get(getUserID)

export default router;
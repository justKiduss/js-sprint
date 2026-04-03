import express from "express";
import { createUser, deleteUser, getUser, getUsers, loginUser, updateUser } from "../controllers/userController.js";
import { validateUser } from "../middleware/validateUser.js";

const router=express.Router();

    router.get('/',getUsers);

    router.post('/',validateUser, createUser);
    router.post('/login',loginUser);

    router.get('/:id',getUser);
    router.put('/:id',updateUser);
    router.delete('/:id',deleteUser);


export default router;
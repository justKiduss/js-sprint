import { createUserService, deleteUserService, getUserService, getUsersService, updateUserService } from "../services/userService"
import { asyncHandler } from "../utilis/asyncHandler";

export const getUsers=asyncHandler( async (req,res,next)=>{
    const users=await getUsersService();
    res.status(200).json({success:true,data:users});
})

export const getUser=asyncHandler( async (req,res,next)=>{
    const user=await getUserService(req.params.id);
    if(!user){
        const error=new Error("user not found");
        error.status=404;
        throw error;
    }
    res.status(200).json({success:true,data:user});
})

export const createUser=asyncHandler( async (req,res,next)=>{
    const newUser=await createUserService(req.body);
    if(!newUser){
        const error=new Error("user not created");
        error.status=400;
        throw error;
    }
    res.status(201).json({success:"true",data:newUser,msg:"user created"});
})

export const updateUser=asyncHandler( async(req,res,next)=>{
    const updated=await updateUserService(req.params.id);
    if(!updated){
        const error=new Error("user not found");
        error.status=404;
        throw error;
    }
    res.status(200).json({success:true,data:updated,msg:"user updated"});
})

export const deleteUser=asyncHandler( async (req,res,next)=>{
    const deleted=await deleteUserService(req.params.id);
    if(!deleted){
        const error=new Error("user not found");
        error.status=404;
        throw error; 
    }
    res.status(200).json({success:true,data:deleted,msg:"user deleted"})
})
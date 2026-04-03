import model from "../models/userModel.js";
import bcrypt from "bcrypt";
export const getUsersService=async ()=>{
    return await model.getAll();
    
} 

export const getUserService=async (id)=>{
    if(!id) return null;
    return await model.getById(id);
}

export const createUserService=async (data)=>{
    if(!data) return null;
    if(!data?.email || !data?.password || !data?.username){
        const error=new Error("Missing required fields");
        error.status=400;
        throw error;
    };
    const existing=await model.getByEmail(data.email.trim());

    if(existing){
        const error=new Error("Email already exists");
        error.status=409;
        throw error;
    }

    const hashedPassword=await bcrypt.hash(data.password.trim(),10);

    const normalized={
        username:data.username.trim(),
        email:data.email.trim(),
        password:hashedPassword,
        avatar:data.avatar?data.avatar.trim():null
    }
    return await model.create(normalized);
}
export const loginService=async (data)=>{
    if(!data) return null;

    const normalized={
        email:data.email.trim(),
        password:data.password.trim()
    }
    const user=await model.getByEmail(normalized.email);

    if(!user){
        const error = new Error("Invalid credentials");
        error.status = 401;
        throw error; 
    }
    const isMatch=await bcrypt.compare(normalized.password,user.password);
    if(!isMatch){
        const error = new Error("Invalid credentials");
        error.status = 401;
        throw error;
    }
    return user;
   
}
export const updateUserService=async (id,data)=>{
    if(!id || !data) return null;

    return await model.update(id,data);
}

export const deleteUserService=async (id)=>{
    if(!id) return null;
    return  await model.delete(id);

}
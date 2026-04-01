import userModel from "../models/userModel"
export const getUsersService=async ()=>{
    return await userModel.getAll();
} 

export const getUserService=async (id)=>{
    if(!id) return null;
    return await userModel.getById(id);
}

export const createUserService=async (data)=>{
    if(!data) return null;

    const normalized={
        username:data.username.trim(),
        email:data.email.trim(),
        password:data.password.trim(),
        avatar:data.avatar.trim()
    }
    return await userModel.create(normalized);
}

export const updateUserService=async (id,data)=>{
    if(!id || !data) return null;
    return await userModel.update(id,data);
}

export const deleteUserService=async (id)=>{
    if(!id) return null;
    return  await userModel.delete(id);

}
import userModel from "../models/userModel"
export const getUsersService=async ()=>{
    return await userModel.getAll();
} 

export const getUserService=async (id)=>{
    if(!id) return null;
    return await userModel.getById(id);
}

export const createUserService=(data)=>{
    if(!data) return null;

    const normalized={
        username:data.username.trim(),
        email:data.email.trim(),
        password,avatar
    }
}

export const updateUserService=()=>{


}

export const deleteUserService=()=>{

}
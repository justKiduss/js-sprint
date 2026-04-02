import model from "../models/userModel.js"
export const getUsersService=async ()=>{
    return await model.getAll();
} 

export const getUserService=async (id)=>{
    if(!id) return null;
    return await model.getById(id);
}

export const createUserService=async (data)=>{
    if(!data) return null;

    const normalized={
        username:data.username.trim(),
        email:data.email.trim(),
        password:data.password.trim(),
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
    if(user.password!== normalized.password){
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
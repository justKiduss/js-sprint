import model from "../models/reviewModel.js";
export async function getAllService(){
    return await model.getAll();
}

export async function getReviewByIdService(id){
    if(!id){
        return null
    }
    return await model.getById(id);
}
export async function createService(data){
    if(!data){
        return null;
      }
    return await model.create(data);
}

export async function updateService(id,data){
    if(!id || !data){
        return null;
    }
    return await model.update(id,data);
}

export async function deleteService(id){
    if(!id){
        return null;
    }
    return  await model.delete(id);
}
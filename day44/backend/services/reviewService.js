import model, { reviewModel } from "../models/reviewModel.js";
export function getAllReviews(){
    return model.getAll();
}

export function getReviewById(id){
    if(!id){
        return null
    }
    const stringId=String(id);
    return model.getById(stringId);
}
export function createReview(data){
    if(!data){
        return null;
      }
    const id=Date.now().toString();
    return model.create(id,data);
}

export function updateReviews(id, data){
    if(!id || !data){
        return null;
    }
    const stringId=String(id);
    return model.update(stringId,data);
}

export function deleteReview(id){
    if(!id){
        return null;
    }
    const stringId=String(id);
    return  model.delete(stringId);
}
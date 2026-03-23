import { createReview, getAllReviews, getReviewById } from "../services/reviewService";
export const getReviews=(req,res,next)=>{
        res.status(200)
        .json({
                id:getAllReviews().id,
                review:getAllReviews.review,
                rating:getAllReviews.rating,
        });
        next();
};

export const getReview=(req,res)=>{
        getReviewById(req.id);
        res.status(200).
        json({
                id:getReviewById().id,
                review:getReviewById().review,
                rating:getReviewById().rating,   
        });
        next();
}
export const createReviews=(req,res)=>{
        createReview(req.id,req.review);
        res.status(201).json({
                id:createReview().id,
                review:createReview().review,
                rating:createReview().rating,  
        });
        next;
}

export const updateReview=(req,res)=>{
        updateReview(req.id);
        res.status(200).json({
                id:updateReview().id,
                review:updateReview().review,
                rating:updateReview().rating,
        });
}

export const deleteReview=(req,res)=>{
        deleteReview(req.id);
        res.status(200).json({
                msg:deleteReview()
        });
}



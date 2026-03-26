import { getAllService, getReviewByIdService, createService, updateService, deleteService } from "../services/reviewService.js";
import { asyncHandler } from "../utilis/asyncHandler.js";
export const getReviews=asyncHandler(async(req,res,next)=>{
        const reviews=await getAllService();
        res.status(200).json({success:true,data:reviews});
});

export const getReview=asyncHandler(async (req,res,next)=>{
                const {id}=req.params;
                const review=await getReviewByIdService(id);
                if (!review) {
                        const error = new Error("Review not found");
                        error.status = 404;
                        throw error;
                }
                res.status(200).json({success:true,data:review});
});
export const getReviewsByMovieId=asyncHandler(async (req,res,next)=>{
        const {movie_id}=req.params;
        const reviewForAmovie=await getReviewByMovieIdService(movie_id);
        res.status(200).json({success:true,data:reviewForAmovie});

});
export const createReviews=asyncHandler(async (req,res,next)=>{
        const {movie_id,movie_title,rating,review}=req.body;
        const newReview=await createService({
                movie_id,movie_title,rating,review
        })
        res.status(201).json({success:true,data:newReview});   
});

export const updateReview=asyncHandler(async (req,res,next)=>{   
        const {id}=req.params;
        const {movie_id,movie_title,rating,review}=req.body;
        const updated=await updateService(id,{
                movie_id,movie_title,rating,review  
        });
        if (!updated) {
                const error = new Error("Review not found");
                error.status = 404;
                throw error;
        }
        res.status(200).json({success:true,data:updated});
});

export const deleteReview=asyncHandler(async (req,res)=>{
        const { id }=req.params;
        const deleted=await deleteService(id);
        if (!deleted) {
                const error = new Error("Review not found");
                error.status = 404;
                throw error;
        }
        res.status(200).json({
                success:true,
                data:deleted
        });   
});



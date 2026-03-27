import { getAllService, getReviewByIdService, createService, updateService, deleteService,getReviewByMovieIdService } from "../services/reviewService.js";
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
        // if(!movie_id){
        //       const error = new Error("");
        //         error.status = 404;
        //         throw error;   
        // }
        const reviewForAmovie=await getReviewByMovieIdService(movie_id);
        res.status(200).json({success:true,data:reviewForAmovie});

});
export const createReviews=asyncHandler(async (req,res,next)=>{
        const {movie_id,movie_title,rating,review}=req.body;
        const parsedRating=parseFloat(rating);
        const inValid=!movie_id || typeof(movie_id) !== "string"||
                !movie_title||typeof(movie_title) != "string"||
                isNaN(parsedRating) || parsedRating < 1 ||parsedRating > 5||
                (review&&typeof review !== "string");
        if(inValid){
                const error=new Error("Invalid input")
                error.status = 400;
                throw error;
        }
        const newReview=await createService({
                movie_id,movie_title,rating:parsedRating,review
        })
        if (!newReview) {
                const error = new Error("Review is not created");
                error.status = 404;
                throw error;
        }
        res.status(201).json({success:true,data:newReview});   
});

export const updateReview=asyncHandler(async (req,res,next)=>{   
        const {id}=req.params;
        const {movie_id,movie_title,rating,review}=req.body;

        const parsedRating=parseFloat(rating);
        const inValid=!movie_id || typeof(movie_id) !== "string"||
                !movie_title||typeof(movie_title) != "string"||
                isNaN(parsedRating) || parsedRating < 1 ||parsedRating > 5||
                (review&&typeof review !== "string");
        if(inValid){
                const error=new Error("Invalid input")
                error.status = 400;
                throw error;
        }
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



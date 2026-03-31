import { validateReview } from "../middleware/validateReview.js";
import { getAllService, getReviewByIdService, createService, updateService, deleteService,getReviewByMovieIdService } from "../services/reviewService.js";
import { asyncHandler } from "../utilis/asyncHandler.js";
export const getReviews=asyncHandler(async(req,res,next)=>{
        const reviews=await getAllService();
        res.status(200).json({success:true,data:reviews});
});

export const getReview=asyncHandler(async (req,res,next)=>{
                const review=await getReviewByIdService(req.params.id);
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

        const newReview=await createService(req.body);
        if (!newReview) {
                const error = new Error("Review is not created");
                error.status = 400;
                throw error;
        }

        res.status(201).json({success:true,data:newReview});   
});

export const updateReview=asyncHandler(async (req,res,next)=>{   

        const updated=await updateService(req.params.id,req.body);
        if (!updated) {
                const error = new Error("Review not found");
                error.status = 404;
                throw error;
        }
        res.status(200).json({success:true,data:updated});
});

export const deleteReview=asyncHandler(async (req,res)=>{
        const deleted=await deleteService(req.params.id);
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



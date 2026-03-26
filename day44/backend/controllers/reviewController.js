import { getAllService, getReviewByIdService, createService, updateService, deleteService } from "../services/reviewService.js";
import { asyncHandler } from "../utilis/asyncHandler.js";
export const getReviews=asyncHandler(async(req,res,next)=>{
        const reviews=await getAllService();
        res.status(200).json({success:true,data:reviews});
});

export const getReview=async (req,res,next)=>{
        try{
                const {id}=req.params;
                const review=await getReviewByIdService(id);
                res.status(200).json({success:true,data:review});
        }catch(error){
                next(error);
        }
}
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
        res.status(200).json({success:true,data:updated});
});

export const deleteReview=asyncHandler(async (req,res)=>{
        const { id }=req.params;
        const deleted=await deleteService(id);
        res.status(200).json({
                success:true,
                data:deleted
        });   
});



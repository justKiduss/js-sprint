import { getAllService, getReviewByIdService, createService, updateService, deleteService } from "../services/reviewService.js";
export const getReviews=async (req,res,next)=>{
        try{
                const reviews=await getAllService();
                res.status(200).json({success:true,data:reviews});
        }catch(error){
                next(error)
        }
};

export const getReview=async (req,res,next)=>{
        try{
                const {id}=req.params;
                const review=await getReviewByIdService(id);
                res.status(200).json({success:true,data:review});
        }catch(error){
                next(error);
        }
}
export const createReviews=async (req,res,next)=>{
        try{
                const {movie_id,movie_title,rating,review}=req.body;
                const newReview=await createService({
                        movie_id,movie_title,rating,review
                })
                res.status(201).json({success:true,data:newReview});
        }catch(error){
                next(error);
        }      
}

export const updateReview=async (req,res,next)=>{
        try{    
                const {id}=req.params;
                const {movie_id,movie_title,rating,review}=req.body;
                const updated=await updateService(id,{
                movie_id,movie_title,rating,review  
                });
                res.status(200).json({success:true,data:updated});
        }catch(error){
                next(error);
        }

}

export const deleteReview=async (req,res)=>{
        try{
                const { id }=req.params;
                const deleted=await deleteService(id);
                res.status(200).json({
                        success:true,
                        data:deleted
                });
        }catch(error){
                next(error);
        }
}



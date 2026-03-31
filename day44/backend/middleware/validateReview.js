export const validateReview=(req,res,next)=>{
    const {movie_id,movie_title,rating,review}=req.body;
    const parsedRating = parseFloat(rating);
    const inValid=!movie_id || typeof(movie_id) !== "string"||
        !movie_title||typeof(movie_title) != "string"||
        isNaN(parsedRating) || parsedRating < 1 ||parsedRating > 5||
        (review&&typeof review !== "string");

        if(inValid){
            const error=new Error("Invalid input")
            error.status = 400;
            throw error;
        }
        req.body.rating(parsedRating);

        next();
} 
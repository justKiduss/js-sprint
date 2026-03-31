// POST //create review
// GET //get reviews 
// DELETE // delete review//:id
// PATCH //update review/:id

import express from "express";
import { getReviews,createReviews, getReview, updateReview, deleteReview,getReviewsByMovieId} from "../controllers/reviewController.js";
import { validateReview } from "../middleware/validateReview.js";
import { validateId } from "../middleware/validateId.js"
    const router=express.Router();
    router.get('/',getReviews);

    router.get('/movie/:movie_id',getReviewsByMovieId);

    router.get('/:id',validateId, getReview);

    router.post('/create', validateReview ,createReviews);

    router.patch('/:id', validateId,validateReview ,updateReview);

    router.delete("/:id", validateId ,deleteReview);


    export default router;

    
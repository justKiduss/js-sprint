// POST //create review
// GET //get reviews 
// DELETE // delete review//:id
// PATCH //update review/:id

import express from "express";
import { getReviews,createReviews, getReview, updateReview, deleteReview,getReviewsByMovieId} from "../controllers/reviewController.js";

    const router=express.Router();
    router.get('/',getReviews);

    router.get('/movie/:movie_id',getReviewsByMovieId);

    router.get('/:id', getReview);

    router.post('/create',createReviews);

    router.patch('/:id', updateReview);

    router.delete("/:id", deleteReview);


    export default router;

    
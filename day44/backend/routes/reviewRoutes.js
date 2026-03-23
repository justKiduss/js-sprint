// POST //create review
// GET //get reviews 
// DELETE // delete review//:id
// PATCH //update review/:id

import express from "express";
import { createReviews, deleteReview, getReviews, updateReviews,getReview } from "../controllers/reviewController.js";
import { createReview, getAllReviews } from "../services/reviewService.js";

    const router=express.Router();
    router.get('/',getAllReviews);

    // router.get('/:id', getReview);

    router.post('/create',createReview);

    // router.patch('/:id', updateReviews);

    // router.delete("/:id", deleteReview);


    export default router;
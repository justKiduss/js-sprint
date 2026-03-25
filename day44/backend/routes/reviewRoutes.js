// POST //create review
// GET //get reviews 
// DELETE // delete review//:id
// PATCH //update review/:id

import express from "express";
import { getReviews,createReviews, getReview, updateReview, deleteReview} from "../controllers/reviewController.js";

    const router=express.Router();
    router.get('/',getReviews);

    router.get('/:id', getReview);

    router.post('/create',createReviews);

    router.patch('/:id', updateReview);

    router.delete("/:id", deleteReview);


    export default router;

    
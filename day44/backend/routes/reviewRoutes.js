// POST //create review
// GET //get reviews 
// DELETE // delete review//:id
// PATCH //update review/:id

import express from "express";
import { createReview, deleteReview, getReviews, updateReview } from "../controllers/reviewController.js";

    const router=express.Router();
    router.get('/getReviews', getReviews);

    router.post('/createReview', createReview);

    router.patch('/updateReview/:id', updateReview);

    router.delete("/deleteReview/:id", deleteReview);

    export default router;
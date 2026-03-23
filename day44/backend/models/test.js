import { createReview, deleteReview, getAllReviews, getReviewById, updateReviews } from "../services/reviewService.js";

const a=createReview({review:"good",rating:5});
console.log(a);
let id=a.id;
const b=getReviewById(id);
console.log(b);

const c=getAllReviews();
console.log(c);

const d=updateReviews(id,{rating:3,review:"not bad"});
console.log(d);

const e=deleteReview(id);
console.log(e);


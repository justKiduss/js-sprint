const express=require('express');
const cors=require('cors');
const app=express();
const PORT=5000;

app.use(cors());
app.use(express.json());

let reviewData={
    byIds:{},
    allIds:[]
};

app.get('/api/get_reviews',(req,res)=>{
    res.json(reviewData);
})

app.post('/api/post_reviews',(req,res)=>{
    const {id,review}=req.body;

    reviewData.byIds[id]={reviews:review};

    if(!reviewData.allIds.includes(id)){
        reviewData.allIds.push(id);
    }
    res.status(201).json({id,reviews:review})
})

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
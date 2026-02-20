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

app.delete("/api/delete_reviews",(req,res)=>{
    const {id}=req.body;
    const {[id]:delete_reviews,...rest}=reviewData.byIds;
    reviewData.byIds=rest;
    reviewData.allIds=reviewData.allIds.filter((ids)=>ids!==id);
    res.status(200).json({success:"true",msg:`${id} deleted successfully`});
})
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
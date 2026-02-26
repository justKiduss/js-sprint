const express=require("express");
const cors=require('cors');
const PORT=5000; 
const app=express();

app.use(express.json());
app.use(cors());

const ReviewData={byIds:{},allIds:[]};

app.get('/api/get_reviews',(req,res)=>{
    res.status(200).json({success:true,data:ReviewData})
})


app.post('/api/post_review',(req,res)=>{
    const {id,review}=req.body;

    if(!id||!review) res.status(401).json({success:false,error:"id or review is not found"});
    ReviewData.byIds[id]={review:review};
    if(!ReviewData.allIds.includes(id)){
        ReviewData.allIds.push(id);
    }
    res.status(201).json({success:true,data:{id,review}})
})

app.delete('/api/delete_review',(req,res)=>{
    const {id}=req.body;

    if(!id) res.status(401).json({success:false,error:"invalid input"});
    if(!ReviewData.allIds.includes(id)){
        res.status(404).json({success:false,error:"id is not found"});
    }
    const {id:_,...rest}=ReviewData.byIds;
    ReviewData.byIds=rest;
    ReviewData.allIds=ReviewData.allIds.filter((ids)=>ids!==id);
    res.status(200).json({success:true,data:{id}})
})

app.patch('/api/edit_review',(req,res)=>{
    const {id,review}=req.body;
    if(!id||!review) res.status(401).json({success:false,error:"id or review is not found"});
    if(!ReviewData.allIds.includes(id)){
        res.status(404).json({success:false,error:"id is not found"});
    }
    ReviewData.byIds[id]={review:review};
    res.status(200).json({success:true,data:{id,review}})
})

app.listen(PORT,()=>{
    console.log(`Serve running on http://localhost:${PORT}`);
})
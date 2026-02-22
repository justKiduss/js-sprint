const express=require("express");
const cors=require("cors");

const app=express();
const PORT=5000;

app.use(cors()); // In Express, app.use() means "Apply this to every single request that comes into this server."
app.use(express.json())

const ReviewData={
    byIds:{},
    allIds:{}
}

app.get('/api/review',(req,res)=>{
    res.json(initialData);
})

app.post('/api/post_review',(req,res)=>{
    const {id,review}=req.body;
    if(!id||!review) res.status(400).json("invalid input");
    ReviewData.byIds[id]={review:review};
    if(!ReviewData.allIds.includes(id)){
        ReviewData.allIds.push(id);
    }

    res.status(201).json({id,review})
})


app.delete('/api/delete_review',(req,res)=>{
    const {id}=req.body;
    if(!id) res.status(400).json({
        success:false,
        message:"id is missing"
    });
    const idInReview=allIds.find(id);
    if(!idInReview) res.status(404).json({success:false,msg:"id is not found"});

    const {[id]:deleteID,...rest}=ReviewData.byIds;
    ReviewData.byIds=rest;
    ReviewData.allIds=ReviewData.allIds.filter(ids=>ids!==id);

    res.status(200).json({
        success:"true",
        message:`${id} is deleted`
    })
})

app.use((req,res)=>{ // it only runs if no other route matched the request.if yes this is res
   res.status(404).json({success:false,error:"Route not found"});
});


app.listen(PORT,()=>{
    console.log(`Serve running on http://localhost:${PORT}`)
})

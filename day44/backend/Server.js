const express=require("express");
const cors=require("cors");
const PORT=5000;

const app=express();
app.use(express.json());
app.use(cors());

// routes

// middleware

// error handling

app.listen(PORT,()=>{
 console.log(`https://localhost:${PORT} connected successfull`);
})
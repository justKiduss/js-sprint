import express from "express";
import cors from "cors";
import reviewRoutes from "./routes/reviewRoutes.js";
const PORT=5000;

const app=express();
app.use(express.json());
app.use(cors());

// routes
app.use("/api/reviews",reviewRoutes);


// middleware

// error handling

app.listen(PORT,()=>{
 console.log(`http://localhost:${PORT} connected successfull`);
})
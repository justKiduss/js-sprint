import express from "express";
import cors from "cors";
import reviewRoutes from "./routes/reviewRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { notFound } from "./middleware/notFound.js";
import helmet from "helmet"; // this is for security like it 
                //prevents these attacks
                // Key Header: Content-Security-Policy (limits where resources can be loaded from).
                // Key Header: X-Frame-Options (prevents Clickjacking).
                // Key Header: X-Content-Type-Options (prevents MIME-sniffing).
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
dotenv.config();


const port=process.env.PORT || 3000;
const app=express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter =rateLimit({
    windowMs:15 * 60 * 1000,
    max:100,
    standardHeaders:true,
    legacyHeaders:false
})
app.use("/api",limiter);
// routes
app.use("/api/reviews",reviewRoutes);
// middleware
app.use(notFound);
// error handling
app.use(errorHandler);

app.listen(port,()=>{
 console.log(`http://localhost:${port} connected successfull`);
})
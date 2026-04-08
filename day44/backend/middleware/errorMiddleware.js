import { logger } from "../utilis/logger.js";

export const errorHandler=(err,req,res,next)=>{

    logger.error({
        message:err.message,
        stack:err.stack,
        status:err.status,
        path:req.originalUrl,
        method:req.method,
        user:req.user?.id || null
    })
    res.status(err.status || 500).json({
        success:false,
        message:err.message || 'Internal Server Error'
    });
}
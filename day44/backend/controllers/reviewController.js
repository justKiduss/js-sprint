
export const getReviews=(req,res)=>{
        res.status(200).json({msg:"list of reviews"});
};

export const createReview=(req,res)=>{
        res.status(201).json({msg:"review created"});
}

export const updateReview=(rea,res)=>{
        res.status(200).json({msg:"review updated"});
}

export const deleteReview=()=>{
        res.status(200).json({msg:"review deleted"});
}



export async function saveReviews(reviewId,review){
    try{
        const data=await loadReviews();
        const saveToStorage={
            byIds:{
                ...data.byIds,[reviewId]:{
                reviews:review
                }
            },
            allIds:
            data.allIds.includes(reviewId)?
            data.allIds:
            [...data.allIds,reviewId]
        }
        if(!saveToStorage||saveToStorage===null) throw new Error("their is an issue with state")
        localStorage.setItem("reviews",JSON.stringify(saveToStorage));
    return {reviewId,review};
    }catch{
        throw new Error("error while trying to save")
    }
}

export async function deleteReview(deleteId){
    const data=await loadReviews();

       const {[deleteId]:_,...rest}=data.byIds;
        const deleteReviews={
            byIds:rest,
            allIds:data.allIds.filter(id=>id!==deleteId)
        }
        localStorage.setItem("reviews",JSON.stringify(deleteReviews));
        return deleteId;
}
export function loadReviews(){
    try{
        const reviews=localStorage.getItem("reviews");
        return reviews? JSON.parse(reviews):{byIds:{},allIds:[]};    
    }catch{
        throw new Error("error while loading")
    }
}
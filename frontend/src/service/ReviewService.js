const API="http://localhost:5000/api";

export async function saveReviews(id,review){
    try{
        const response=await fetch(`${API}/post_reviews`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id,review:review})
        });
        return await response.json();
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
export async function loadReviews(){
    try{
        const reviews=await fetch(`${API}/get_reviews`);
        return await reviews.json()?? {byIds:{},allIds:[]};
    }catch{
        throw new Error("error while loading")
    }
}
export async function saveReviews(state){
    try{
        if(!state||state===null) throw new Error("their is an issue with state")
        localStorage.setItem("reviews",state);
    }catch{
        throw new Error("error while trying to save")
    }
}
export async function loadReviews(){
    try{
        const reviews=localStorage.getItem("reviews");
        if(!reviews) throw new Error("Nothing to fetch")
        return JSON.parse(reviews);    
    }catch{
        throw new Error("error while loading")
    }
}
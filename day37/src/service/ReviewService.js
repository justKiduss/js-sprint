export async function saveReviews(state){
    try{
        if(!state||state===null) throw new Error("their is an issue with state")
        localStorage.setItem("reviews",JSON.stringify(state));
    }catch{
        throw new Error("error while trying to save")
    }
}
export async function loadReviews(){
    try{
        const reviews=localStorage.getItem("reviews");
        return reviews?JSON.parse(reviews):{byIds:{},allIds:[]};    
    }catch{
        throw new Error("error while loading")
    }
}
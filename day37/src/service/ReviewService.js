export function saveReviews(saveToStorage){
    try{
        if(!saveToStorage||saveToStorage===null) throw new Error("their is an issue with state")
        localStorage.setItem("reviews",JSON.stringify(saveToStorage));
    }catch{
        throw new Error("error while trying to save")
    }
}
export function loadReviews(){
    try{
        const reviews=localStorage.getItem("reviews");
        return reviews? JSON.parse(reviews):{byIds:{},allIds:[]};    
    }catch{
        throw new Error("error while loading")
    }
}
export function LoadReview(){
    try{
        const movie=localStorage.getItem("Movies",JSON.parse())
        if(!movie) return {}
        return movie;
    }catch(err){
        throw err
    }
}

export function SaveReview(movies){
    try{
        localStorage.setItem("Movies",JSON.stringify(movies))
    }catch(err){
        throw err
    }
}

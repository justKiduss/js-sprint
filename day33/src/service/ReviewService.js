const KEY="reviews";
export function getReviews(){
    try{
        const movie=localStorage.getItem(KEY)
        return movie?JSON.parse(movie):{byIds:{},allIds:[]};
    }catch(err){
        throw err
    }
}

export function persistReviews(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function createReview(state){
    persistReviews(state);
}

export function updateReview(state){
    persistReviews(state)
}

export function deleteReview(state){
    persistReviews(state)
}
const KEY="reviews"

const delay=()=>
    new Promise(res=>setTimeout(res,500))
export async function getReview(){
    await delay();
    const reviews=localStorage.getItem(KEY)
        return reviews?JSON.parse(reviews):{byIds:{},allIds:[]};
}

export async function saveReview(state){
    await delay();
    if(!state) throw new Error("Invalid state");
    localStorage.setItem(KEY,JSON.stringify(state))
}
 const KEY="reviews"
 const delay=()=>
    new Promise(res=>setTimeout(res,400));

export async function getReviews(){
    await delay();

    const review=localStorage.getItem(KEY);
    return JSON.parse(review);
}

export async function saveReviews(state){
 await delay();
 localStorage.setItem(KEY,JSON.stringify(state))
}
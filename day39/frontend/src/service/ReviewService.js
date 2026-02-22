const API="http://localhost:5000/api";

export async function saveReviews(id,review){

    try{
        const response=await fetch(`${API}/post_review`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id,review:review})
        });
        if(!response.ok) throw new Error();
        return await loadReviews();
    }catch{
        throw new Error("error while trying to save")
    }
}

export async function deleteReview(id){
    const reviews=await fetch(`${API}/delete_review`,{
        method:"DELETE",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({id})
    });
    if(!reviews.ok) throw new Error("error happened")
    return await loadReviews();
}
export async function loadReviews(){
    try{
        const reviews=await fetch(`${API}/get_reviews`);
        const data=await reviews.json();
        return data?? {byIds:{},allIds:[]};
    }catch{
        throw new Error("error while loading")
    }
}

export async function EditReviews(id,review){
    try{
        const reviews=await fetch(`${API}/edit_review`,{
            method:"PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id,review})
        })
        if(!reviews.ok) throw new Error("error");
        return await loadReviews();
    }catch{
        throw new Error("error while updaing")
    }
}
const API=`http://localhost:5000/api`
export async function createReview(id,movie_title,rating,review){
    try{
        const repsonse=await fetch(`${API}/reviews/`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id,movie_title,rating,review})
        });
        const data=await repsonse.json();
        if(!repsonse.ok) throw new Error(data.error);
        return await getAllReviews();
    }catch{
        throw new Error("couldn't reach backend");
    }
}

export async function getAllReviews(){
    try{
        const repsonse=await fetch(`${API}/reviews/`,{
            method:'GET',
            // headers:{'Content-Type':'application/json'},
        })
        const data=await repsonse.json();
        if(!repsonse.ok) throw new Error(data.error);
        return data.data?? {byIds:{},allIds:[]};
        
    }catch{
        throw new Error("couldn't reach backend");
    }
}

export async function updateReviews(id,movie_id,movie_title,rating,review){
    try{
        const response=await fetch(`${API}/reviews/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({movie_id,movie_title,rating,review})
        })
        const data=await response.json();
        if(!response.ok) throw new Error(data.error);
        return await getAllReviews();
    }catch{
        throw new Error("couldn't reach backend");
    }
}


export async function deleteReviews(id){
    try{
        const response=await fetch(`${API}/reviews/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({id})
        })
        const data=await response.json();
        if(!response.ok) throw new Error(data.error);
        return await getAllReviews();
    }catch{
        throw new Error("couldn't reach backend");
    }
}

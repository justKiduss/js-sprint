const APIKEY='9ba860f27b8af2a4d997f80a66b063b5';
export function Movies(){
    try{
        const promise=fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        .then((res)=>{
            if(!res.ok) throw new Error("fetch failed");
            return res.json()
        })
        return promise;
    }catch(err){
        console.log("failed to fetch movies",err)
    }
}

export function searchMovie(query){
    try{
        const promise=fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        .then((res)=>{
            if(!res.ok) throw new Error("fetch failed");
             return res.json();
            })
        return promise
    }catch(err){
        console.log("faild to fetch search")
    }
}
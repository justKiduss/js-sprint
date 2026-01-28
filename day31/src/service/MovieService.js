const APIKEY="9ba860f27b8af2a4d997f80a66b063b5";
export function Movie(){
    try{
        return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        .then((res)=>{
            return res.json()
        })
    }catch(error){
        return
    }
}

export function searchMovie(query){
    try{
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        .then((res)=>{
            return res.json()
        })
    }catch(error){
        return
    }
}



export function Movies(){
    try{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
            .then((res)=>{
                return res.json()
            })
        }catch(err){
            return err
        }
}

export function searchMovies(query){
    try{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)           
            }
            return res.json()
        });
    }catch(err){
        throw err
    }
}
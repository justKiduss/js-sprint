const APIKEY="9ba860f27b8af2a4d997f80a66b063b5";
export function Movies(){
    try{
        const promise=fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
            .then((res)=>{
                return res.json()
            })
            return promise;
        }catch(err){
            return err
        }
}

export function searchMovies(query){
    try{
        const promise=fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)           
            }
            return res.json()
        });
        return promise;
    }catch(err){
        throw err
    }
}
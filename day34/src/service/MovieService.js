const APIKEY="9ba860f27b8af2a4d997f80a66b063b5";

export async function Movies(){
    try{
        const res=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        return await res.json();
    }catch(err){
        throw new Error("error while fetching movie data from the api");
    }
}

export async function searchMovie(query){
    try{
        const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        return await res.json();
    }catch(err){
        throw new Error ("error while fetching movie data from the api")
    }
}
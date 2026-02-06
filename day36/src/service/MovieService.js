const APIKEY="9ba860f27b8af2a4d997f80a66b063b5";

export async function Movies(){
    try{
        const res= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        return await res.json();
    }catch{
        throw new Error("error while fetching top movies"); 
    }
}

export async function SearchMovie(query){
    try{
        const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        return await res.json();
    }catch{
        throw new Error("error while fetching search movies"); 
    }
}
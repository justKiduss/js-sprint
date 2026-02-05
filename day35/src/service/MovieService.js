const APIKEY="9ba860f27b8af2a4d997f80a66b063b5";

export async function Movies(){
    try{
        const movies=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        return await movies.json();
    }catch{
        console.log("error while fetching movies from api");
        throw new Error ("error while fetching movies from api");
    }
} 

export async function SearchMovies(query){
    try{
        const searchMovies=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        return await searchMovies.json();
    }catch{
        console.log("error while fetching movies from api");
        throw new Error ("error while fetching movies from api");
    }
}
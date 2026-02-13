const APIKEY="9ba860f27b8af2a4d997f80a66b063b5";

export async function Movie(){
    try{
        const movie=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        if(!movie.ok) throw new Error ("Server responded with a error")
            return await movie.json();
    }catch{
        throw new Error("error while fetching");
    }
}

export async function SearchMovie(query){
    try{
        const movie=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`)
        return await movie.json();
    }catch{
        throw new Error ("error while fetchig");
    }
}

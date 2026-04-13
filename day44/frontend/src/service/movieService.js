const APIKEY=process.env.APIKEY;

export async function Movie(){
    try{
        const movie= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`);
            if(!movie) throw new Error("server responden with a error");
            return await movie.json(); 
    }catch{
        throw new Error("Error while fetching");
    }
}

export async function SearchMovie(query){
    try{
        const movie=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`);
        return await movie.json();
    }catch{
        throw new Error("error while fetching");
    }
}
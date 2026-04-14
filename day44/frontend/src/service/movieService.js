const APIKEY=process.env.REACT_APP_APIKEY;
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

export async function trendingMovies(){
    try{
        const movie=await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${APIKEY}`);
        const data=await movie.json();
        return data.results;
    }catch{
        throw new Error("error while fegtching");
    }
}

export async function popularMovies(){
    try{
        const movie=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${APIKEY}&language=en-US&page=1`);
        const data=await movie.json();
        return data.results;
    }catch{
        throw new Error("error while fegtching");
    }
}


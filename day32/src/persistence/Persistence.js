export function saveMovie(movie){
    try{
        localStorage.setItem("movies",JSON.stringify(movie));
    }catch(err){
        return <p>Error while fetching</p>
    }
}

export function loadMovie(){
    try{
        const loadMovies=localStorage.getItem("movies");
        if(!loadMovies) return {}
        return JSON.parse(loadMovies);
    }catch(err){
        return <p>Error while fetching</p>
    }

}
export function saveMovie(movie){
    try{
        const movies=localStorage.setItem("movies",JSON.stringify(movie));
        return movies;
    }catch(err){
        return <p>Error while fetching</p>
    }
}

export function loadMovie(){
    try{
        const loadMovies=localStorage.getItem("movies");
        return JSON.parse(loadMovies);
    }catch(err){
        return <p>Error while fetching</p>
    }

}
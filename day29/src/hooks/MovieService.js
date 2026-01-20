  const APIKEY="9ba860f27b8af2a4d997f80a66b063b5"
  export async function fetchMovies(){
    try{
    const response=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      }catch(error){
        console.error(`Could not get products: ${error}`);
        throw error;
      }
}

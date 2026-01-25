const APIKEY='9ba860f27b8af2a4d997f80a66b063b5';
export function Movies(){
    try{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        .then((res)=>{
            return res
        })
    }catch(err){
        console.log("failed to fetch movies",err)
    }
}

// export async function searchMovie(){
//     try{
//         const promise=fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchMov}`);
//         promise.await(promise.json());
//         return {promise}
//     }catch(err){
//         console.log("faild to fetch search")
//     }
// }
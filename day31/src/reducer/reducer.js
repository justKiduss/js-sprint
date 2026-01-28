export default function reducer(state,action){
    switch(action.type){
       case "LOADING":{
        return {status:"loading",data:[],error:null}
       }
       case "SUCCESS":{
        return {status:"success",data:action.payload,error:null}
       }
       case "ERROR":{
        return {status:"error",data:[],error:action.payload}
       }
       case "createReview":{
        const {movieid,review}=action.payload;
        return {...state,
         data:state.data.map((movie)=>
            movieid===movie.id?
         {...movie,review}:movie
        )
        }
       }
       case "editReview":{
        const {editId,editText}=action.payload;
        return {...state,
            data:state.data.map((movie)=>(
                editId===movie.id?
                {...movie,review:editText}:movie
            ))
        }
       }
       case "deleteReview":{
        const {id}=action.payload;
        return {...state,
            data:state.data.map((movie)=>(
                movie.id===id? {
                    ...movie,review:""
                }:movie
            ))}
       }
       default:{
        return state
       }
    }
}
export default function CRUDreducer(localState,action){
    switch(action.type){
        case "INIT_FROM_STORAGE":{
            return action.payload || {};
        }
        case "createReview":{
            const {movieid,review}=action.payload;
            return {...localState,[movieid]:{
                review
            }
            };
       }
       case "editReview":{
            const {editId,editText}=action.payload;
            return {...localState,[editId]:{review:editText}}
       }
       case "deleteReview":{
        const {id}=action.payload;
        const next={...localState};
        delete next[id];
        return next
       }
       default:
        return localState
    }
}
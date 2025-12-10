export function loadState(){
    try{
        const seterilized=localStorage.getItem('tasks');
        if(!seterilized) return []
        return JSON.parse(seterilized);
    }catch(err){        
        return [];
        }
    }

export function saveState(Tasks){
    try{
        localStorage.setItem('tasks',JSON.stringify(Tasks));
    }catch(err){
        return "error during saving the state"
    }
}

export const initialState={
    items:{
        all:[],
        work:[],
        school:[],
        social:[]
    }
}
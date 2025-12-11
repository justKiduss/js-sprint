export function loadState(){
    try{
        const seterilized=localStorage.getItem('tasks');
        if(!seterilized) return []
        const parsed=JSON.parse(seterilized);

        if(!parsed.items||
            !parsed.items.all ||
            !parsed.items.work ||
            !parsed.items.school ||
            !parsed.items.social){
                return initialState;
            }
        return parsed;
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
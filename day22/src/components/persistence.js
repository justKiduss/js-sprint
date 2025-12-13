
export function saveTask(state){
    try{
     const task=localStorage.setItem("tasks",JSON.stringify(state))
    }catch(err){
     return "error while saving task";
    }
}

export function loadTask(){
    try{
        const task=localStorage.getItem("tasks");
        if(!task) return [];
        return JSON.parse(task)
    }catch(err){
        return [];
    }
}

export const initialState=[];
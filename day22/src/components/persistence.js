
export function saveTask(state){
    try{
     localStorage.setItem("tasks",JSON.stringify(state))
    }catch(err){
     return "error while saving task";
    }
}

export function loadTask(){
    try{
        const task=localStorage.getItem("tasks");
        if(!task) return {task:[]}
        return JSON.parse(task)
    }catch(err){
        return {task:[]};
    }
}

export const initialState=[];
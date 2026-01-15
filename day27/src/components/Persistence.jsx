export const initialState=[];

export function generateId(){
const uniqueId = new Date(Math.ceil(Math.random() * 1e13)).valueOf().toString(36);
// Sample output: '1x7kf3ygb'
return uniqueId;
}

export function loadTask(){
    try{
        const task=localStorage.getItem("Tasks");
        if(!task) return [];
        return JSON.parse(task);
    }catch(err){
        return
    }
}

export function saveTask(state){
    if(!state){
        return []
    }
    localStorage.setItem("Tasks",JSON.stringify(state))
}
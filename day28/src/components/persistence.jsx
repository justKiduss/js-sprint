export const initialState=[];

export function loadTask(){
 const tasks=localStorage.getItem("Task");
 if(!tasks){
    return []
 }
 return JSON.parse(tasks);
}

export function saveTask(state){
    if(!state) return [];
    localStorage.setItem("Task",JSON.stringify(state));
}

export function generateId(){
const uniqueId = new Date(Math.ceil(Math.random() * 1e13)).valueOf().toString(36);
// Sample output: '1x7kf3ygb'
return uniqueId;
}

export function filterTasks(state,filter){
    const filtered=state.filter((task)=>task.parentId===null)
  switch(filter){
    case "done":{
        return filtered.filter((task)=>task.done)
    }
    case "High":{
        return filtered.filter((task)=>task.priority==="High")
    }
    case "All":
    default:
        return filtered;
  }
}

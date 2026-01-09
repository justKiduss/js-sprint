export const initialState=[]

export function loadTask(){
    try{
        const task=localStorage.getItem("Task");
        if(!task){
          return [];
        }
        return JSON.parse(task);
    }catch{
        return []
    }
}

export function saveTask(state){
    try{
      localStorage.setItem("Task",JSON.stringify(state));
    }catch{
      return "error while saveing task";
    }
}

export function generateId(){
const uniqueId = new Date(Math.ceil(Math.random() * 1e13)).valueOf().toString(36);
// Sample output: '1x7kf3ygb'
return uniqueId;
}

export function getAllTasks(state){
  return state.length;
}

export function getCompletedTasks(state){
  return state.map((task)=>(
    task.done===true
  ))
}

export function getIncompletedTasks(state){
  return state.map((task)=>(
    task.done===!true
  ))
}
export function getTotalSubtaskCount(state){
  return state.map((task)=>(
    task.parentId===!null
  ))
}
export function CompletionPercentage(){
  return getCompletedTasks().length/getAllTasks() *100;
}
// getTaskTree(state)

// getStats(state)


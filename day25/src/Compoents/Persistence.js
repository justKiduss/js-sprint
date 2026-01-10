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
  console.log("getAllTask",state)
  return state.length;
}

export function getCompletedTasks(state){
  return state.filter((task)=>
    task.done===true
  ).length;
}

export function getIncompletedTasks(state){
  return state.filter((task)=>
    task.done===false
  ).length;
}
export function getTotalSubtaskCount(state){
  return state.filter((task)=>
    task.parentId !== null
  ).length
}
export function CompletionPercentage(state){
  const total = getAllTasks(state);
  if (total === 0) return 0;
  return Math.round(getCompletedTasks(state)/getAllTasks(state) *100);
}
// getTaskTree(state)

// getStats(state)
// @dr3h0t#r3@d

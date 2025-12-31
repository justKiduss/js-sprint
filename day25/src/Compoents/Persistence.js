export const initialState=[]

export function loadTask(){
    try{
        const task=localStorage.getItem("task");
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
      localStorage.setItem("task",JSON.stringify(state));
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

// getCompletedTasks(state)

// getTaskTree(state)

// getStats(state)


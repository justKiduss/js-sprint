export const initialState=[]; 

export function saveTasks(state){
    try{
    localStorage.setItem("tasks",JSON.stringify(state));
    }catch(err){
        return "error while adding tasks";
    }
}

export function loadTasks(){
    try{
      const task=localStorage.getItem("tasks");
      if(!task) return [];
      return JSON.parse(task);
    }catch(err){
       return [];
    }
} 
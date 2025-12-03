export function loadTasks(){
    try{
       let seterailize=localStorage.getItem("todos");
       if(!seterailize){
          return [];
       }
       return JSON.parse(seterailize);
    }catch(err){
        return []
    }
}
export function saveTasks(todos){
    try{
       localStorage.setItem("todos",JSON.stringify(todos));
    }catch(err){
        return err
    }
}
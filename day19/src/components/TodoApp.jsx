import { useReducer,useState } from "react";
import TodoItems from "./TodoItems";
import TaskReducers from "../reducers/TaskReducers"
function TodoApp(){
    const initialTasks=[]; 
    const [tasks,dispatch]=useReducer(TaskReducers,initialTasks);
    const [newTask,setNewTask]=useState("");
    const [category,setCategory]=useState("all") 
    
    function handleAddtask(e){
     e.preventDefault();

     if(!newTask.trim()) return;

     dispatch({
       type:"added",
       id:Date.now(),
       text:newTask,
       category:category
     })
     setNewTask("");
    }
    console.log(tasks);
        return(
            <div>
               <h1 style={{textAlign:"center"}}>Task Manager</h1>  
                    <form onSubmit={handleAddtask}>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                            <select onChange={(e)=>setCategory(e.target.value)}>
                                <option value="all">All</option>
                                <option value="work">work</option>
                                <option value="social">social</option>
                                <option value="school">school</option>
                            </select>
                            <button type="submit">Add Tasks</button>
                        </div>
                    </form>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                    <TodoItems tasks={tasks} dispatch={dispatch} newTask={newTask}/>
                    </div>
               </div>
        )
}
export default TodoApp;
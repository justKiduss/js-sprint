import React from "react";
import { useReducer,useState } from "react";
import TodoItems from "./TodoItems";
import TaskReducers from "../reducers/TaskReducers"
function TodoApp(){
    const initialTasks=[]; 
    const [tasks,dispatch]=useReducer(TaskReducers,initialTasks);
    const [newTask,setNewTask]=useState("");

    function handleAddtask(e){
     e.preventDefault();

     if(!newTask.trim()) return;

     dispatch({
       type:"added",
       id:Date.now(),
       text:newTask,
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
                            <button type="submit">Add Tasks</button>
                        </div>
                    </form>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
                    <TodoItems tasks={tasks} dispatch={dispatch}/>
                    </div>
               </div>
        )
}
export default TodoApp;
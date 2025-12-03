import React,{useState,useReducer,useEffect} from "react";
import TaskReducer from "../reducers/taskReducer";
import {loadTasks,saveTasks} from "./persistence"
import TaskItems from "./TaskItems";
function TaskManager(){
    const [todo,setTodo]=useState("");
    const [todos,dispatch]=useReducer(TaskReducer,loadTasks())
    const [category,setCategory]=useState("all")

    useEffect(()=>{
      saveTasks(todos);
    },[todos])
    
function handleSubmit(e){
    e.preventDefault();
    if(!todo.trim()) return;

    dispatch({
        type:"add",
        id:Date.now(),
        text:todo,
        category:category,
        done:false
    })
    setTodo("")
}
return(
    <div>
        <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"120px 0px 40px 0px"}}>
            <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
            <button>Add Tasks</button>
        </form>
        <TaskItems todos={todos} dispatch={dispatch}/>
    </div>
)
}
export default TaskManager;
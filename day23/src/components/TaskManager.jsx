import { useEffect, useReducer, useState } from "react"
import TaskItems from "./TaskItems";
import reducer from "../reducers/reducer";
import { initialState, loadTasks, saveTasks} from "./persistence";

export default function TaskManager(){
const [newTask,setNewTask]=useState("");
const [subTask,setsubTask]=useState("")
const [priority,setPriority]=useState("all")
const [dueDate,setdueDate]=useState("");
const [state,dispatch]=useReducer(reducer,loadTasks()||initialState)


useEffect(()=>{
saveTasks(state);
},[state])

function handleSubmit(e){
e.preventDefault();
if(!newTask.trim()){
    return
}
dispatch({
    type:"addTask",
    payload:{
        id:Date.now(),
        text:newTask,
        priority:priority,
        dueDate:dueDate,
        done:false,
        parentId:null
    }
})
setNewTask("");
}
    return (
     <div style={{margin:"50px"}}>
        <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <input type="text" onChange={(e)=>setNewTask(e.target.value)} value={newTask}/>
             <select onChange={(e)=>setPriority(e.target.value)}>
                {/* <option>All</option> */}
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input type="date" onChange={(e)=>setdueDate(e.target.value)} value={dueDate}/>
            <button type="submit">Add Task</button>
        </form>
        <div style={{textAlign:"center"}}>
            <TaskItems state={state} dispatch={dispatch}/>
        </div>
     </div>
    )
} 
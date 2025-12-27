import { useState,useReducer,useEffect } from "react"; 
import TaskItems from "./TaskItems";
import reducer from "../reducer/reducer";
import { generateId, initialState, LoadState, SaveState } from "./Persistance";
export default function TaskManager(){
    const [newTask,setNewTask]=useState("");
    const [priority,setPriority]=useState("Low");
    const [dueDate,setdueDate]=useState("");
    const [state,dispatch]=useReducer(reducer,LoadState()||initialState)
    
    useEffect(()=>{
        SaveState(state);
    },[state])

    function handleAddTask(e){
        e.preventDefault();
        if(!newTask.trim()){
            return 
        }
       dispatch({
        type:"addTask",
        payload:{
            id:generateId(),
            text:newTask,
            priority:priority,
            dueDate:dueDate,
            parentId:null,
            done:false
        }
       })
       setNewTask("");
    }


    console.log("state",state);
    return (
        <div style={{width:"90%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div>
                <h1>Task Manager</h1>
                <form onSubmit={handleAddTask}>
                    <input type="text" onChange={(e)=>setNewTask(e.target.value)} value={newTask}/>
                    <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                        <option value="Low">Low </option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input type="date" onChange={(e)=>setdueDate(e.target.value)} value={dueDate}/>
                    <button type="submit">Add Task</button>
                </form>
                <div>
                    <TaskItems/>
                </div>
            </div>
        </div>
    )
}
import reducer from "../reducers/reducer";
import { generateId, initialState, loadTask, saveTask } from "./persistence";
import { TaskItems } from "./TaskItems";
import { useState,useEffect,useReducer } from "react";
export default function TaskManager(){
    const [newTask,setNewTask]=useState("");
    const [priority,setPriority]=useState("Low");
    const [dueDate,setDueDate]=useState("");
    const [state,dispatch]=useReducer(reducer,loadTask()||initialState)

    useEffect(()=>{
    saveTask(state);
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
            done:false,
            parentId:null
        }
       })
       setNewTask("");
    }
    console.log(state)
    return(
        <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div>
                <div>
                    <h1>Task Manager</h1>
                    <form onSubmit={handleAddTask}>
                        <input type="text" onChange={(e)=>setNewTask(e.target.value)} value={newTask} />
                        <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <input type="datetime-local" onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <div>
                    <TaskItems state={state} dispatch={dispatch}/>
                </div>
            </div>
        </div>
        </>
    )
}
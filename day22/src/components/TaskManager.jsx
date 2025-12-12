import reducer from "../reducers/reducer";
import { loadTask, saveTask,initialState } from "./persistence";
import TaskItems from "./TaskItems";
import { useState,useReducer,useEffect } from "react";
export default function TaskManager(){
const [state,dispatch]=useReducer(reducer,loadTask()||initialState)
const [newTask,setNewTask]=useState("");
const [category,setCategory]=useState("all");
const [priority,setPriority]=useState("low")
const [dueDate,setDueDate]=useState("");
useEffect(()=>{
    saveTask(state)
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
            category:category,
            priority:priority,
            dueDate:dueDate,
            done:false
        }
    })
    setNewTask("");
    setCategory("all");
    setDueDate(Date.now());
    setPriority("low");
}

console.log(state);
    return(
        <>
        <div style={{margin:"50px"}}>
            <form  onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5px"}}>
                <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                <select onChange={(e)=>setPriority(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
            <div>
                <TaskItems state={state} dispatch={dispatch}/>
            </div>
        </div>
        </>
    )
}
import { useState,useReducer,useEffect } from "react"; 
import {TaskItems} from "./TaskItems"
import { reducer } from "../reducer/reducer";
import {loadTask,saveTask,generateId,initialState,getAllTasks,getCompletedTasks,getIncompletedTasks,getTotalSubtaskCount,CompletionPercentage} from "./Persistence"
export default function TaskManager(){
    const [newTask,setNewTask]=useState("");
    const [priority,setPriority]=useState("Low");
    const [dueDate,setdueDate]=useState("");
    const [state,dispatch]=useReducer(reducer,loadTask()||initialState)
    console.log("loadstate",loadTask())
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
            parentId:null,
            done:false
        }
       })
       setNewTask("");
    }

    console.log("all tasks length",getAllTasks(state));
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
                    <TaskItems state={state} dispatch={dispatch}/>
                </div>
                <div>
                    <h1 style={{textAlign:"center"}}>Stat</h1>
                    <h2>Total Tasks: {getAllTasks(state)}</h2>
                    <h2>Total Completed Task : {getCompletedTasks(state)}</h2>
                    <h2>Total Incomplete Task : {getIncompletedTasks(state)}</h2>
                    <h2>Total Sub Tasks : {getTotalSubtaskCount(state)}</h2>
                    <h1>Completion Percentage : {CompletionPercentage(state)}%</h1>
                </div>
            </div>
        </div>
    )
}
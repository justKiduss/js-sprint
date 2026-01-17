import { TaskItems } from "./TaskItems";
import { useState,useReducer, useEffect } from "react";
import { generateId,initialState,loadTask,saveTask} from "./persistence";
import reducer from "../reducer/reducer";
export default function TaskManager(){
        const [width,setWidth]=useState(window.innerWidth);
        const [newTask,setNewTask]=useState("");
        const [priority,setPriority]=useState("");
        const [dueDate,setDueDate]=useState("");
        const [state,dispatch]=useReducer(reducer,loadTask()||initialState)
        
        useEffect(()=>(
         saveTask(state)
        ),[state])
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
        console.log(state);
        useEffect(()=>{
            function handleResize(){
                setWidth(window.innerWidth);
            }
            window.addEventListener("resize",handleResize);
            return () => window.removeEventListener("resize",handleResize);
        },[]);
        const isMobile=width < 640;
        const containerStyle={
            display:"flex",
            flexDirection:isMobile?"column":"row"
            
        }
        const boxStyle={
            flex:1,
            padding:16,
            border:"1px solid black"
        }
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
                <h1>Task Manager</h1>
                <div>
                <form onSubmit={handleAddTask}>
                    <input type="text" onChange={(e)=>(setNewTask(e.target.value))} value={newTask}/>
                    <select onChange={(e)=>setPriority(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input type="date" onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
                    <button type="submit">AddTask</button>
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
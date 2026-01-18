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
        const inputFields = {
          padding: "6px",
          marginRight: isMobile ? "0px" : "6px",
          marginBottom: isMobile ? "6px" : "0px",
          width: isMobile ? "100%" : "auto"
        };
        
        const buttons = {
        color: "blue",
        padding: "6px",
        width: isMobile ? "100%" : "auto"
        };

        const addTaskLabel = {
        display: "flex",
        flexDirection:"row",
        gap: isMobile ? "6px" : "8px",
        alignItems: isMobile ? "stretch" : "center"
        };
        const heading2Text={
            fontSize:"20px",
            color:"blue"
        }
        const headingText={
            fontSize:"30px",
            color:"blue" 
        }
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
                <h1 style={headingText}>Task Manager</h1>
                <div style={addTaskLabel}>
                <form onSubmit={handleAddTask}>
                    <input type="text" onChange={(e)=>(setNewTask(e.target.value))} value={newTask} style={inputFields}/>
                    <select onChange={(e)=>setPriority(e.target.value)} style={inputFields}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <input type="date" onChange={(e)=>setDueDate(e.target.value)} value={dueDate} style={inputFields}/>
                    <button type="submit" style={buttons}>AddTask</button>
                </form>
                </div>
                <div>
                    <TaskItems state={state} dispatch={dispatch} heading2Text={heading2Text} buttons={buttons} inputFields={inputFields} width={width} isMobile={isMobile} addTaskLabel={addTaskLabel}/>
                </div>
            </div>
        </div>
        </>
    )
}  
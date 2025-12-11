import {useState,useEffect, useReducer} from "react"
import {initialState, saveState,loadState} from "./Persistence"
import reducer from "../reducers/Reducer"
import TaskItems from "./TaskItems";
export function TaskManager(){
const [newTask,setNewTask]=useState("");
const [category,setCategory]=useState("all");
const [categories,dispatch]=useReducer(reducer,loadState()||initialState)

function handleSubmit(e){
e.preventDefault();
dispatch({
    type:"addTask",
    payload:{
        id:Date.now(),
        text:newTask,
        category:category,
        done:false
    }
})
setNewTask("");
}
useEffect(()=>{
    saveState(categories)
},[categories])

console.log(categories)
    return(
        <>
        <div style={{width:"90%",height:"100vh",margin:"50px"}}>
            <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                    <option value="all">All</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="social">Social</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
            <div>
        <TaskItems dispatch={dispatch} categories={categories}/>
            </div>
        </div>
        </>
    )
}
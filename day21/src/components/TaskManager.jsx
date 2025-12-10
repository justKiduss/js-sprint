import {useState,useEffect, useReducer} from "react"
import {initialState} from "./Persistence"
import { reducer } from "../reducers/Reducer";
export function TaskManager(){
const [newTask,setNewTask]=useState("");
const [category,setCategory]=useState("");
const [categories,dispatch]=useReducer(reducer,initialState)

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
})}
console.log(categories)
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                    <option value="social">Social</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
        </div>
        </>
    )
}
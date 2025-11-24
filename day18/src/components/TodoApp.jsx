import React from "react";
import { useState,useEffect } from "react";
import TodoItems from "./TodoItems";
function TodoApp(){
 const [newTodo,setNewTodo]=useState("");
 const [todos,setTodos]=useState([]);
 const [error,setError]=useState("")
 const [category,setCategory]=useState("");
 function checkForm(msg){
     setError(msg);
     setTimeout(()=>"",3000);
 }
 function handleSubmit(e){
     e.preventDefault();
     if(!newTodo.trim()){
        return;
     }
     if(newTodo==null||""||undefined){
        checkForm("field can't be empty")
        return;
     }
     setTodos(
        [...todos,{id:Date.now(),text:newTodo,done:false,category:category}]
     )
     setNewTodo("")
 }   
    return(
       <div style={{height:"100vh",weight:"90%"}}>
        <form onSubmit={handleSubmit}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"30vh",weight:"90%",margin:"50px"}}>
        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
        <select value={category?category:setCategory("work")} onChange={(e)=>setCategory(e.target.value)}>
            <option value="work">work</option>
            <option value="social">social</option>
            <option value="school">school</option>
        </select>
        <button type="submit">Add</button>
        </div>
        </form>
        <div style={{textAlign:"center"}}>
        <TodoItems newTodo={newTodo} setNewTodo={setNewTodo} todos={todos} setTodos={setTodos}/>
        </div>
       </div> 
    )
}
export default TodoApp;
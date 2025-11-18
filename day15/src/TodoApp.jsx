import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoApp(){
    const [todos,setTodos]=useState([]);
    const [newText,setNewText]=useState("")

      useEffect(()=>{
        let tasks=localStorage.getItem("todos")
        setTodos(JSON.parse(tasks))
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    
    function handleSubmit(e){
     e.preventDefault();
    let value=e.target.todo.value;
    if(!value.trim()){
        return;
    }

    setTodos([...todos,{id:Date.now(),text:value,done:false}])
    e.target.reset();
    }
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"90%",height:"100vh"}}>
            <div>
       <form onSubmit={handleSubmit}>
        <input type="text" name="todo"/>
        <button type="submit">Add</button>
       </form>

       <TodoItem todos={todos} setTodos={setTodos} newText={newText} setNewText={setNewText}/>
       </div>
        </div>
    )
}
export default TodoApp;
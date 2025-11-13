import { useState } from "react";

function TodoList(){
const [todos,setTodos]=useState([]);
const [newTodo,setNewTodo]=useState("");
const [error,setError]=useState("");

function handleError(msg){
     setError(msg);
     setTimeout(()=>setError(""),3000);
}
function handleSubmit(e){
    e.preventDefault();
   if(!newTodo.trim()){
    handleError("Can't add empty tasks");
    return;
   }
   if(todos.some((item)=>item.text===newTodo)){
    handleError("Can't duplicate tasks")
    return;
   }
   setTodos(
    [...todos,{text:newTodo,done:false,id:Date.now()}]
   )
    
setNewTodo("");
}
function handleDelete(id){
        setTodos(todos.filter(todo=>
          todo.id!==id))
}

function handleCheck(id){
   setTodos(todos.map((todo)=>(
    todo.id===id?{...todo,done:!todo.done}:todo
   )))
}
    return(
       
        <div style={{width:"90%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
            <form onSubmit={handleSubmit}>
            <input type="text" style={{margin:"10px"}} onChange={(e)=>setNewTodo(e.target.value)} value={newTodo}/>
            <button type="submit">submit</button>
            </form>
            <ul >
                {todos.length>0?
                <>
                {todos.map((todo)=>(
                    <div key={todo.id}>
                        <li style={{display:"flex",gap:"10px"}}>
                            <input type="checkbox" checked={todo.done} onChange={()=>handleCheck(todo.id)}/>
                            <span style={todo.done?{color:"red"}:{}}>{todo.text}</span>
                            <button type="button" style={{height:"20px"}} onClick={()=>handleDelete(todo.id)}>Delete</button>
                        </li>
                    </div>
                ))}
                
                <p>{error}</p>
                </> 
                : <><p style={{textAlign:"center"}}>No tasks yet</p>  </>}
            </ul>
        </div>
        </div>
    )
}

export default TodoList;
// import { useState } from "react";
function TodoItem({todos,error,handleDelete,handleCheck}){
    return(
        <div>
             <ul style={{listStyleType:"none"}}>
            {todos.map((todo)=>(
            <div key={todo.id}>
            <li>
                <input type="checkbox" style={{margin:"10px"}} onChange={()=>handleCheck(todo.id)} checked={todo.done}/> 
                <span>{todo.text}</span>
                <button type="button" style={{margin:"10px"}} onClick={()=>handleDelete(todo.id)}>Delete</button>
            </li>
            </div>
            ))}
           </ul>
            <p>{error}</p>
         
        </div>
    )
}
export default TodoItem;
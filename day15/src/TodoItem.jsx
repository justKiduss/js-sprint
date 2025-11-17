import { useState } from "react";
function TodoItem({todos,newText,setNewText,setTodos}){

     const [on,setOn]=useState(false)


    function handleEdit(e,id){
        e.preventDefault();
        let nText=e.target.edit.value;
      setNewText(...newText,{newText:nText})   
    }

    function handleDelete(id){
   setTodos(
    todos.filter((todo)=>(
    todo.id!==id
    ))
   )
    }

    function handleCheck(id){
   setTodos(
    todos.map((todo)=>(
       todo.id===id?{...todo,done:!todo.done}:todo
    ))
    )
    }
    return(
      
        <ul>
           {todos.map((todo)=>(
            <li key={todo.id}>
                <input type="checkbox" checked={todo.done} onChange={()=>handleCheck(todo.id)}/>
                <span>{todo.text}</span>
                 <button type="button" onClick={()=>handleEdit(setOn(true),todo.id)}>Edit</button>
                  {on?<input type="text" name="edit"/>:""}
                <button type="button" onClick={()=>handleDelete(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
       
    )
}
export default TodoItem;
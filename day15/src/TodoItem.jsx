import { useState } from "react";
function TodoItem({todos,newText,setNewText,setTodos}){

     const [editingId,seteditingId]=useState(null)
      

    function handleEdit(id,text){
        seteditingId(id); 
        setNewText(text);
    }

   function handleSave(id){
    setTodos(
        todos.map((todo)=>(
           todo.id===id?{...todo,text:newText}:todo
        ))
    )
    seteditingId("")
    setNewText("")
   }
    

    function handleDelete(id){
   setTodos(
    todos.filter((todo)=>(
    todo.id!==id
    ))
   )}

    function handleCheck(id){
   setTodos(
    todos.map((todo)=>(
       todo.id===id?{...todo,done:!todo.done}:todo
    ))
    )}
    return(
      
        <ul>
           {todos.map((todo)=>(
            <li key={todo.id}>
              
                <input type="checkbox" checked={todo.done} onChange={()=>handleCheck(todo.id)}/>
                <span>{todo.text}</span>
                 <button type="button" onClick={()=>handleEdit(todo.id,todo.text)}>Edit</button>
                  {editingId===todo.id?
                  <>
                  <input type="text" name="edit" onChange={(e)=>setNewText(e.target.value)} value={newText}/>
                  <button onClick={()=>handleSave(todo.id)}>save</button>
                  </>
                  :""}
              
                <button type="button" onClick={()=>handleDelete(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
       
    )
}
export default TodoItem;

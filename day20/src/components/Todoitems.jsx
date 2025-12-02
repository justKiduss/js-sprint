import { useState } from "react";
export default function Todoitems({todos,dispatch}){
   const [editId,setEditId]=useState();
   const [editText,setEditText]=useState("")
    function handleDelete(id){
         dispatch({
            type:"deleted",
            id:id
         })
    }
    function handleEdit(todo){
      setEditId(todo.id)
      setEditText(todo.text)
    }
    function handleSave(){
        dispatch({
           type:"edited",
           id:editId,
           text:editText
        })
        setEditId("");
        setEditText("");
    }
    function handleCheck(checkedid){
        dispatch({
            type:"checked",
            id:checkedid
        })
    }
    return(
        <div style={{textAlign:"center"}}>
            <input type="text" placeholder="search you todos"/>
            <select>
                <option value="All">All</option>
                <option value="Work">Work</option>
                <option value="Social">Social</option>
                <option value="School">School</option>
            </select>
            <button>Search</button>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <ul style={{listStyle:"none"}}>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.done} onChange={()=>handleCheck(todo.id)}/>
                        <span>{todo.text}</span>
                        {editId==todo.id?(<>
                              <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                              <button type="submit" onClick={()=>handleSave()}>save</button>
                        </>
                        ):(
                        <button onClick={()=>handleEdit(todo)}>Edit</button>
                        )}
                        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
           </ul>
           </div>
        </div>
    )
}
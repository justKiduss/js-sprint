import React from "react";
import { useState } from "react";
    function TodoItems({todos,setTodos}){

        const [selectCategory,setSelectCategory]=useState("all");
        const [editId,setEditId]=useState("");
        const [editText,setEditText]=useState("");
        console.log(todos);
        const filtered=selectCategory==="all"? todos :
        todos.filter((t)=>(t.category===selectCategory))
      
        function handleDeleteTask(id){
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

        // function setEditId(){
            
        // }
        // function handleEdit(){

        // }
        return(
            <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <input type="search" placeholder="search your todo"/> 
                <select value={selectCategory} onChange={(e)=>setSelectCategory(e.target.value)}>
                    <option value="all">all</option>
                    <option value="work">work</option>
                    <option value="social">social</option>
                    <option value="school">school</option>
                </select>
            </div>
            <div>
                {filtered.map((todo)=>(
                    <li key={todo.id} style={{listStyle:"none",padding:"15px"}}>

                        <input type="checkbox" style={{padding:"10px"}} onChange={()=>handleCheck(todo.id)}  checked={todo.done}/>
                        <span>{todo.text}</span>
                        <button style={{margin:"10px"}}>Edit</button>
                        {}
                        <button onClick={()=>handleDeleteTask(todo.id)}>Delete</button>
                    </li>
                ))}
            </div>
            </div>
)
}
export default TodoItems;
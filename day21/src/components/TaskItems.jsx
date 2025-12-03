import { useState } from "react";
export default function TaskItems({todos,dispatch}){
    const [category,setCategory]=useState("all");
    const [categoryId,setCategoryId]=useState("");
    dispatch({
        type:"catagorized",
        id:categoryId,
        category:category,
    })
    return(
        <div>
    <ul style={{textAlign:"center",listStyle:"none",gap:"10px"}}>
        {todos.map((todo)=>(
            <li key={todo.id}>
                <input type="checkbox" checked={todo.done}/>
                <span>{todo.text}</span>
                <button>Edit</button>
                <select onChange={(e)=>{setCategory(e.target.value);setCategoryId(todo.id)}}>
                    <option value="work">work</option>
                    <option value="school">school</option>
                    <option value="social">social</option>
                </select>
                <button>Delete</button>

            </li>
        ))}
    </ul>
    </div>
    )
}
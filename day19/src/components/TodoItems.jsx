import React from "react";

export default function TodoItems({tasks,dispatch}){
   function handleCheck(task_id){
     dispatch({
        type:"check",
        id:task_id,
     })
   } 
   function handleDelete(task_id){
      dispatch({
         type:"deleted",
         id:task_id
      })
   }
   return(
        <>
            <ul style={{textAlign:"center"}}>
             {tasks.map((task)=>(
                <li key={task.id} style={{display:"flex",gap:"10px",alignItems: "center"}} >
                  <input type="checkbox" checked={task.done} onChange={()=>handleCheck(task.id)}/>
                  <span>{task.text}</span>
                  <button onClick={()=>handleDelete(task.id)} style={{height:"30px"}}>Delete</button>
                </li>
             ))}
            </ul>
        </>
   )
}
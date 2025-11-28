import React,{useState} from "react";

export default function TodoItems({tasks,dispatch,newTask}){
   const [category,setCategory]=useState("all") 
   const [search,setSearch]=useState("")
   const [editId,setEditId]=useState('')
   const [editText,setEditText]=useState("")
   // this used reducers
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
   function handleSave(){
      dispatch({
         type:"edited",
         id:editId,
         text:editText
      })
      setEditId("")
   }

   function handleEdit(task_id){
      setEditId(task_id);
      setEditText(tasks.text)
   }
  
    // this doesn't use reducers
    const filteredTask=
          tasks.filter((task)=>(
            category==="all"?task:task.category===category
          )).filter((task)=>(
            task.text.toLowerCase().includes(search.toLowerCase())
          ))
   return(
        <>
        <div style={{marginTop:"10px"}}>
            <form style={{display:"flex"}}>
              <input type="text" placeholder="search your todos" onChange={(e)=>setSearch(e.target.value)} />
              <select onChange={(e)=>setCategory(e.target.value)}>
                  <option value="all">All</option>
                  <option value="work">work</option>
                  <option value="social">social</option>
                  <option value="school">school</option>
              </select>
              <button>search</button>
            </form>
            <ul style={{textAlign:"center"}}>
             {filteredTask.map((task)=>(
                <li key={task.id} style={{display:"flex",gap:"10px",alignItems: "center"}} >
                  <input type="checkbox" checked={task.done} onChange={()=>handleCheck(task.id)}/>
                  <span>{task.text}</span>
                  <button onClick={()=>handleEdit(task.id)}>Edit</button>
                  {editId===task.id?(
                     <>
                        <input type='text' value={editText} onChange={(e)=>setEditText(e.target.value)}/> 
                        <button onClick={()=>handleSave()}>Save</button>
                     </>):(
                        // <span>{task.text}</span>
                        ""
                     )}
                  <button onClick={()=>handleDelete(task.id)} style={{height:"30px"}}>Delete</button>
                </li>
             ))}
            </ul>
            </div>
        </>
   )
}
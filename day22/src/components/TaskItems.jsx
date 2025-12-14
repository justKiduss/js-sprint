import {useState} from "react"
export default function TaskItems({state,dispatch}){
    const [editId,setEditId]=useState("");
    const [editText,setEditText]=useState("");
    const [priority,setPriority]=useState("");
    const [dueDate,setDueDate]=useState("");
    const filteredTasks=state.filter((sta)=>{
          const matchPriority=priority?sta.priority===priority:true
          const matchdueDate=dueDate?sta.dueDate===dueDate:true
          return matchPriority&&matchdueDate;
    })
    function handleEdit(id,text){
     setEditId(id);
     setEditText(text);
    }
    
    return(
        <>
        <div style={{textAlign:"center"}}>
                <input type="text" placeholder="search your tasks"/>
                <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                    <option value="">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <input type="date"  onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
                <button type="submit">search</button>
            <ul style={{listStyle:"none"}}>
            
                {filteredTasks.length===0?
                <> <p>No Task Found</p></>:
                filteredTasks.map((task)=>(
                    <li key={task.id} style={{gap:"10px"}}>
                      <input type="checkbox" checked={task.done} onClick={()=>dispatch({
                          type:"checkTask",
                          id:task.id,
                          done:!task.done
                      })}/>
                      <span>{task.text}</span>
                      {editId===task.id?(
                        <>
                            <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                            <button onClick={()=>{dispatch({
                                type:"editTask",
                                id:editId,
                                editedText:editText
                            });
                            setEditId("");
                            setEditText("")
                            }}>Save</button>
                        </>
                        ):(
                      <button onClick={()=>handleEdit(task.id,task.text)}>Edit</button>
                      )}
                      <button onClick={()=>dispatch({
                           type:"deleteTask",
                           id:task.id
                      })}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
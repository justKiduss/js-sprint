import {useState} from "react"
import { generateId } from "./Persistance";
export function TaskItems({state,dispatch}){
    const rootTask=state.filter(s=>s.parentId===null)
    return(
        <ul>
            {rootTask.map((task)=>(
                <Task
                  key={task.id}
                  task={task}
                  allTask={state}
                  dispatch={dispatch}
                />
            ))}
        </ul>
    )
} 

export function Task({task,allTask,dispatch}){
    const [subTask,setSubTask]=useState("");
    const [visible,setVisible]=useState(false);
    const [editText,setEditText]=useState("");
    const [editId,setEditId]=useState("");
    const [priority,setPriority]=useState("Low");
    const [dueDate,setdueDate]=useState("");
    const children=allTask.filter((t)=>t.parentId===task.id)
    function handleSubTask(){
      if(!subTask){
        return 
      }
      dispatch({
        type:"addTask",
        payload:{
            id:generateId(),
            priority:priority,
            text:subTask,
            parentId:task.id,
            dueDate:dueDate,
            done:false
        }
      })
      setSubTask("");
    }

    function HandleEditTask(task){
     setEditId(task.id);
     setEditText(task.text);
    }
    return(
        
            <li style={{listStyle:"none"}}>
                <div style={{display:"flex",gap:"10px"}}>
                    <input type="checkbox" checked={task.done} onChange={()=>dispatch({
                        type:"checkTask",
                        payload:{ id:task.id }
                    })}/>
                    <span>{task.text}</span>
                      {
                        editId===task.id?<>
                        
                          <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
                          <button onClick={()=>{
                            dispatch({
                                type:"editTask",
                                payload:{
                                    editId:editId,
                                    editText:editText
                                }
                            });
                            setEditId("");
                            setEditText("");
                          }}>Save</button>
                        
                        </>:<>
                        
                          <button onClick={()=>HandleEditTask(task)}>Edit</button>
                        
                        </>
                      }
                    <button onClick={()=>dispatch({
                        type:"deleteTask",
                        payload:{
                            id:task.id
                        }
                    })}>Delete</button>
                    <button onClick={()=>{setVisible(v=>!v)}}>+ SubTask</button>
                </div><br/>
                {visible &&(
                    <>
                    <div style={{gap:"5px"}}>
                            <input type="text" onChange={(e)=>setSubTask(e.target.value)} value={subTask}/> 
                            <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                                <option value="Low">Low </option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                            <input type="date" onChange={(e)=>setdueDate(e.target.value)} value={dueDate}/>
                            <button onClick={()=>{handleSubTask()}}>+ SubTask</button>
                    </div>
                    </>
                )}
                {/* make sure you understand this before you go any further */}
                {children.length > 0 &&(
                   <ul>
                    {children.map((child)=>(
                        <Task 
                         key={child.id}
                         task={child}
                         allTask={allTask}
                         dispatch={dispatch}
                        />
                    ))}
                   </ul>
                )}
            </li>
    )
}
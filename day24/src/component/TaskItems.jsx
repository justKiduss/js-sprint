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
    const children=allTask.filter((t)=>t.parentId===task.id)
    function handleSubTask(){
      if(!subTask){
        return 
      }
      dispatch({
        type:"addTask",
        payload:{
            id:generateId(),
            text:subTask,
            parentId:task.id,
            done:false
        }
      })
      setSubTask("");
    }

    return(
        
            <li style={{listStyle:"none"}}>
                <div style={{display:"flex",gap:"10px"}}>
                    <input type="checkbox" checked={task.done} onChange={dispatch({
                        type:"checkTask",
                        payload:{ id:task.id }
                    })}/>

                    <span>{task.text}</span>

                    <button>Edit</button>

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
                        <input type="text" onChange={(e)=>setSubTask(e.target.value)} value={subTask}/> 
                        <button onClick={()=>{handleSubTask()}}>+ SubTask</button>
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
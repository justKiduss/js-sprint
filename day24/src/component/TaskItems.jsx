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
    const children=allTask.filter((t)=>t.parentId===task.id)
    function handleSubTask(e){
      e.preventDefault();

      if(!subTask){
        return 
      }
      dispatch({
        type:"addTask",
        payload:{
            id:generateId(),
            text:subTask,
            parentId:null,
            done:false
        }
      })
      setSubTask("");
    }

    return(
        <div>
            <li style={{display:"flex",gap:"10px"}}>
                <input type="checkbox"/>
                <span>{task.text}</span>
                <button>Edit</button>
                <button>Delete</button>
                {subTask?(
                    <>
                        <input type="text" onChange={(e)=>setSubTask(e.target.value)}/> 
                        <button>+ SubTask</button>
                    </>
                ):(
                    <>
                        <button onClick={handleSubTask}>+ SubTask</button>
                    </>
                )}
                {/* make sure you understand this before you go any further */}
                {/* {children.length > 0 &&(
                   <ul>
                    {children.map((child)=>(
                        <Task 
                         key={child.id}
                         task={child}
                         allTask={allTask}
                         dis
                        />
                    ))}
                   </ul>
                )} */}
            </li>
        </div>
    )
}
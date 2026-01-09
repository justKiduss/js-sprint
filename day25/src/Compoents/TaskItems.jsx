import {Children, useState} from "react"
import {generateId} from "./Persistence"
export function TaskItems({state,dispatch}){
    const [filter,setFilter]=useState("All");
    const rootTask=state.filter((task)=>task.parentId===null);
        return (
        <div>
            <form>
                <select onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="done">Completed</option>
                    <option value="High">High Priority</option>
                </select>
                <input type="date"/>
                <input type="date"/>
            </form>
            {rootTask.map((task)=>(
                <ul key={task.id}>
                    <Task
                        task={task}
                        dispatch={dispatch}
                        allTasks={state}
                    />
                </ul>
            ))}
        </div>
        )
}


export function Task({task,dispatch,allTasks}){
    const [visible,setVisible]=useState(false);
    const [subTask,setSubTask]=useState("");
    const [priority,setPriority]=useState("");
    const [dueDate,setdueDate]=useState('');
    const [open,setOpen]=useState(false);
    const children=allTasks.filter((task)=>task.parentId===task.id)
        function handleSubTask(){
         dispatch({
            type:"addSubTask",
            payload:{
               id:generateId(),
               text:subTask,
               priority:priority,
               dueDate:dueDate,
               parentId:task.id,
               done:false
            }
         })
         setSubTask("");
        }
     return(
        <div>
            <li>
                <input type="checkbox"/>
                <span>{task.text}</span>
                <button>Edit</button>
                <button onClick={()=>{
                    dispatch({
                      type:"deleteTask",
                      payload:{
                        id:task.id
                      }
                    })}}
                    >Delete</button>
                <button onClick={()=>{handleSubTask();setVisible((v)=>!v)}}>+ SubTask</button>

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
                            <button onClick={()=>{handleSubTask();setOpen(true)}}>+ SubTask</button>
                    </div>
                    </>
                )}

                {children.length > 0 &&(
                    <ul>
                        {children.map((child)=>(
                          <Task 
                            key={child.id}
                            task={child}
                            dispatch={dispatch}
                            allTasks={allTasks}
                          />
                        ))}
                        
                    </ul>
                )}
            </li>
        </div>
     )
}
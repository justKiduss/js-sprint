import { useState } from "react"
import { filterTasks, generateId } from "./persistence";
export function Task({allState,dispatch,task}){
    const [visible,setVisible]=useState(false);
    const [subTask,setSubTask]=useState("");
    const [priority,setPriority]=useState("Low");
    const [dueDate,setDueDate]=useState("");

    function handleSubTask(e){
       e.preventDefault();
       if(!subTask.trim()){
        return
       }

       dispatch({
        type:"addTask",
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
    const children=allState.filter((t)=>t.parentId===task.id)
    return(
        <>
            <div>
                    <li style={{gap:"5px"}}>
                        <input type="checkbox"/>
                        <span>{task.text}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                        <button onClick={()=>setVisible((v)=>!v)}>+ SubTask</button>
                        {visible &&(
                            <>
                            <div>
                                <form onSubmit={handleSubTask}>
                                    <input type="text" onChange={(e)=>setSubTask(e.target.value)}/>
                                    <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                    <input type="date" onChange={(e)=>setDueDate(e.target.value)}/>
                                    <button type="submit">+ subTask</button>
                                </form>
                                {children.length>0&&
                                    <ul>
                                        {children.map((child)=>(
                                            <Task
                                            key={child.id}
                                            allState={allState}
                                            dispatch={dispatch}
                                            task={child}
                                            />
                                        ))}
                                    </ul>
                                }
                            </div>
                            </>
                        )}
                    </li>
            </div>
        </>
    )
} 

export function TaskItems({state,dispatch}){
    const [filter,setFilter]=useState("All");
    const rootTasks=state.filter((task)=>task.parentId===null)
    const filterTask=filterTasks(filter,state);
    return(
        <>
          <form>
                <select onChange={(e)=>setFilter(e.target.value)} value={filter}>
                    <option value="All">All</option>
                    <option value="done">Completed</option>
                    <option value="High">High priority</option>
                </select>
                <input type="date"/>
                <input type="date"/>
          </form>
                {filter ?
                <>
                    {filterTask.map((task)=>(
                        <Task 
                            key={task.id}
                            dispatch={dispatch}
                            allState={state}
                            task={task}
                        />  
                    ))}  
                </>:<>
                     {rootTasks.map((task)=>(
                        <Task 
                            key={task.id}
                            dispatch={dispatch}
                            allState={state}
                            task={task}
                        />  
                    ))} 
                </>
                }
         </>
    )
}
import { useState } from "react"
import { filterTasks, generateId } from "./persistence";
export function TaskItems({state,dispatch}){
    const [filter,setFilter]=useState("");
    const filtered=filterTasks(state,filter);
    return(
        <>
            <div>
                <select onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="done">Completed</option>
                    <option value="High">High priority</option> 
                </select>
                <input type="date"/>
                <input type="date"/>
                <div>
                    {filtered.map((task)=>(
                        <Task
                         key={task.id}
                         task={task}
                         allState={state}
                         dispatch={dispatch}
                         depth={0}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export function Task({task,allState,dispatch,depth}){
    const [filter,setFilter]=useState("");
    const [subTask,setSubTask]=useState("");
    const [priority,setPriority]=useState("");
    const [dueDate,setDueDate]=useState("");
    const children=allState.filter((child)=>child.parentId===task)

    function handlesubTask(e){
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
            parentId:task,
            done:false
        }
      })
    }
    return(
        <>
        <div>
            <ul>
                <li>
                <input type="checkbox"/>
                <span>{task.text}</span>
                <button>Edit</button>
                <button>Delete</button>
                <button onClick={()=>setFilter((v)=>!v)}>+ subtask</button>
                {filter &&
                    <div>
                        <form onSubmit={handlesubTask}>
                            <input type="text" onChange={(e)=>(setSubTask(e.target.value))} value={subTask}/>
                            <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                            <input type="date" onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
                            <button type="submit">AddTask</button>
                        </form>
                    </div>
                }
            {children.length >0 &&
            children.map((child)=>(
                <Task
                key={child.id}
                task={child}
                allState={allState}
                dispatch={dispatch}
                depth={depth+1}
                />
            ))
            }
            </li>
        </ul>
        </div>
        </>
    )
}
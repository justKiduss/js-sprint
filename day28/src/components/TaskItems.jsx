import { useState } from "react"
import { filterTasks, generateId } from "./persistence";
export function TaskItems({state,dispatch,heading2Text,isMobile,width,addTaskLabel}){
    const [filter,setFilter]=useState("");
    const filtered=filterTasks(state,filter);
    return(
        <div>
            <div style={addTaskLabel}>
                <select onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="done">Completed</option>
                    <option value="High">High priority</option> 
                </select>
                <input type="date"/>
                <input type="date"/>
            </div>    
                <div>
                    <h1 style={heading2Text}>List</h1>
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
    )
}

export function Task({task,allState,dispatch,depth}){
    const [filter,setFilter]=useState("");
    const [subTask,setSubTask]=useState("");
    const [priority,setPriority]=useState("");
    const [dueDate,setDueDate]=useState("");
    const [editId,setEditId]=useState("");
    const [editTask,setEditTask]=useState("");
    const [editpriority,setEditPriority]=useState("");
    const [editdueDate,setEditDueDate]=useState("");
    const children=allState.filter((child)=>child.parentId===task.id)

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
            parentId:task.id,
            done:false
        }
      })
      setSubTask("");
    }

    function handleEditTask(e){
       e.preventDefault();
       if(!editTask.trim()){
        return []
       } 
       dispatch({
        type:"editTask",
        payload:{
            id:editId,
            text:editTask,
            dueDate:editdueDate,
            priority:editpriority
        }
       })
       setEditId("");
       setEditTask("");
       setEditDueDate("");
       setEditPriority("");
    }
    return(
        <div style={{paddingLeft:depth*16}}>
            <ul style={{listStyle:"none"}}>
              <li>
                <input type="checkbox" checked={task.done} onChange={(e)=>dispatch({
                    type:"checkTask",
                    payload:{
                        id:task.id
                    }
                })}/>
                <span>{task.text}</span>
                {editId===task.id?
                <>
                    <form onSubmit={handleEditTask}>
                        <input type="text" onChange={(e)=>(setEditTask(e.target.value))} value={editTask}/>
                        <select onChange={(e)=>setEditPriority(e.target.value)} value={editpriority}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <input type="date" onChange={(e)=>setEditDueDate(e.target.value)} value={editdueDate}/>
                        <button type="submit">save</button>
                        <button onClick={()=>{
                            setEditId("");
                            setEditDueDate("");
                            setEditPriority("");
                            setEditTask("");
                        }}>Cancel</button>
                    </form>
                    </>:<>
                    <button onClick={()=>setEditId(task.id)}>Edit</button>  
                    </>
                }
                {!editId &&
                <>
                <button onClick={()=>dispatch({
                    type:"deleteTask",
                    payload:{
                        id:task.id
                    }
                 })}>Delete</button>
                <button onClick={()=>setFilter((v)=>!v)}>+ subtask</button>
                </>
                }
                {/* <button onClick={()=>setEditId(task.id)}>Edit</button> */}
                {filter &&
                <>
                    <div>
                        <form onSubmit={handlesubTask}>
                            <input type="text" onChange={(e)=>(setSubTask(e.target.value))} value={subTask}/>
                            <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                            <input type="date" onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
                            <button type="submit">+ subTask</button>
                        </form> 
                    </div>
                    <div>
                    {children.length>0 &&
                        children.map((child)=>(
                                <Task
                                    key={child.id}
                                    task={child}
                                    allState={allState}
                                    dispatch={dispatch}
                                    depth={depth+1}
                                />
                    ))}
                    </div>
                </>
                }
            </li>
        </ul>    
        </div>
    )
}
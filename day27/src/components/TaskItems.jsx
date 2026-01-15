import {useState } from "react";
import { generateId } from "./Persistence";

export function TaskItems({state,dispatch}){
const rootTasks=state.filter((task)=>(task.parentId===null))
    return(
        <div>
           <div>
                <select>
                    <option value="All">All</option>
                    <option value="done">Completed</option>
                    <option value="High">High Priority</option>
                </select>
                <input type="date"/>
                <input type="date"/>
           </div>
           {rootTasks.map((task)=>(
             <ul>
                <Task
                  key={task.id}
                  task={task}
                  dispatch={dispatch}
                  allState={state}
                />
             </ul>
           ))}
        </div>
    )
}

export function Task({task,dispatch,allState}){
  const [visible,setVisible]=useState(false);
  const [subTask,setsubTask]=useState("");
  const [priority,setPriority]=useState("");
  const [dueDate,setDueDate]=useState("");
  const [editId,setEditId]=useState("");
  const [editText,setEditText]=useState("");
  const [editPriority,setEditPriority]=useState("");
  const [editdueDate,setEditdueDate]=useState("");
  const children=allState.filter((child)=>child.parentId===task.id)
  function handleAddSubTask(e){
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
      done:false,
      parentId:task.id
      }
     })
     setsubTask("");
  }
  function handleEditTask(e){
    e.preventDefault();
    if(!editText.trim()){
      return
    }
    dispatch({
      type:"editTask",
      payload:{
        id:editId,
        text:editText,
        dueDate:editdueDate,
        priority:editPriority,
      }
    })
    editId("");
  }
    return(
      <div>
        <input type="checkbox" onChange={(e)=>dispatch({
          type:"checkTask",
          payload:{
            id:task.id
          }
        })} checked={task.done}/>
        <span>{task.text}</span>
        <button onClick={()=>setEditId(task.id)}>Edit</button>
        {editId===task.id&&
           <>
           <form onClick={handleEditTask}>
              <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
              <select onChange={(e)=>setEditPriority(e.target.value)} value={editPriority}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <input type="datetime-local" onChange={(e)=>setEditdueDate(e.target.value)} value={editdueDate}/>
              <button type="submit">save</button> 
              <button onClick={()=>setEditId("")}>Cancel</button>
            </form>
           </>
        }
        {!editId&&
        <>
          <button onClick={()=>dispatch({
            type:"deleteTask",
            payload:{
              id:task.id
            }
          })}>Delete</button>
          <button onClick={()=>setVisible((v)=>!v)}>+ Subtask</button>
        </>
        }

        {visible && 
        <>
          <div>
             <form onSubmit={handleAddSubTask}>
                <input type="text" onChange={(e)=>setsubTask(e.target.value)} value={subTask} />
                <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <input type="datetime-local" onChange={(e)=>setDueDate(e.target.value)} value={dueDate}/>
                <button type="submit">Add Task</button>
              </form>
          </div>
          {children.length>0&&
          children.map((child)=>(
            <ul>
              <Task
                key={child.id}
                task={child}
                dispatch={dispatch}
                allState={allState}
              />
            </ul>
          ))
          }
        </>
        }
        
      </div>
    )
}
import { useState } from "react";
function Task({task,allTasks,dispatch}){
const [subTask,setSubTask]=useState("");
const [visible,setVisible]=useState(false)
const [editId,setEditId]=useState("");
const [editText,setEditText]=useState("");
const children=allTasks.filter((t)=>t.parentId===task.id);

function addSubTask(){
    if(!subTask.trim()) return;
    dispatch({
        type:"addTask",
        payload:{
            id:Date.now(),
            text:subTask,
            done:false,
            parentId:task.id
        }
    })
    setSubTask("");
}

return(
   <li key={task.id} style={{listStyle:"none"}}>
      <input type="checkbox" onChange={()=>{
        dispatch({
         type:"checkTask",
         payload:{
          id:task.id,
          done:task.done
         }
        }
      )}} checked={task.done} style={{margin:"5px"}}/>
      <span style={{margin:"5px"}}>{task.text}</span>
      {editId===task.id?(
    <>
      <input type="text" onChange={(e)=>setEditText(e.target.value)} value={editText}/>
      <button onClick={()=>{
        dispatch({
          type:"editText",
          payload:{
          editedId:editId,
          editedText:editText
        } 
      });
      setEditId("");
    }
      }>save</button>
      </>
    ):(
      <button style={{margin:"5px"}}onClick={()=>{setEditId(task.id)}}
      >Edit</button>
      )}
  
      <button style={{margin:"5px"}} 
      onClick={()=>{dispatch({
         type:"deleteTask",
         id:task.id,
      })}}>Delete</button>
      <button onClick={()=>{addSubTask();setVisible((visible)=>!visible);}} style={{margin:"5px"}}>+ subtask</button>
      <br/>
     {visible&&(
        <>
      <input
        value={subTask}
        onChange={e => setSubTask(e.target.value)}
      />
      {children.length > 0 && (
        <ul>
          {children.map(child => (
            <Task
              key={child.id}
              task={child}
              allTasks={allTasks}
              dispatch={dispatch}
            />
            ))}
        </ul>
      )}
      </>
      )}
    </li>
)
}
export default function TaskItems({state,dispatch}){
const rootTasks=state.filter((t)=>t.parentId===null);
    return(
        <ul style={{textAlign:"center"}}>
            {rootTasks.map((sta)=>(
              <Task 
                key={sta.id}
                task={sta}
                allTasks={state}
                dispatch={dispatch}
              />
            ))}
        </ul>
    )
}
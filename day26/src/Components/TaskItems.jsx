import { useState } from "react"
import { filterTasks } from "./persistence";
export function Task({allState,dispatch,task}){
    const [filter,setFilter]=useState("All");
    const children=allState.filter((t)=>t.parentId===task.id)
    filterTasks(filter,allState) 
    return(
        <>
            <div>
                <ul>
                    <li>
                        <input type="checkbox"/>
                        <span>{task.text}</span>
                        <button>+ SubTask</button>
                    </li>
                </ul>
               {
                children.length>0&&
                children.map((child)=>(
                    <Task
                     key={child.id}
                     dispatch={dispatch}
                     task={child}
                    />
                ))
               }
            </div>
        </>
    )
} 

export function TaskItems({state,dispatch}){
    const rootTasks=state.filter((task)=>task.parentId===null)
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
            <ul>
                {filter?
                <>
                {filterTasks}  
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
            </ul>
        </>
    )
}
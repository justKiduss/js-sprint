import {useState} from "react"
export function TaskItems({state,dispatch}){
    const rootTask=state.filter((task)=>task.parentId===null);
    const [filter,setFilter]=useState("");
    console.log(filter);
        return (
        <div>
            <form>
                <select onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="true">Completed</option>
                    <option value="High">High Priority</option>
                </select>
                <input type="date"/>
                <input type="date"/>
            </form>
            {filter?
                <>
                 {state.filter((task)=>(
                    task.done===filter && 
                      <ul>
                        <Task
                            task={task}
                            dispatch={dispatch}
                            allTasks={state}
                        />
                    </ul>
                 ))}
                </>
            :
            <>
                {rootTask.map((task)=>(
                    <ul>
                        <Task
                            task={task}
                            dispatch={dispatch}
                            allTasks={state}
                        />
                    </ul>
                ))}
            </>
        }
        </div>
        )
}


export function Task({task,dispatch,allTasks}){
     return(
        <div>
            <li>
                <input type="checkbox"/>
                <span>{task.text}</span>
                <button>Edit</button>
                <button>Delete</button>
                <button>+ SubTask</button>
            </li>
        </div>
     )
}
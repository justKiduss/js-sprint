import {useState} from "react"
export default function TaskItems({state,dispatch}){
const [priority,setPriority]=useState();
    
    return(
        <>
        <div style={{textAlign:"center"}}>
            <form>
                <input type="text" placeholder="search your tasks"/>
                <select onChange={(e)=>setPriority(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button type="submit">search</button>
            </form>
            <ul style={{listStyle:"none"}}>
                {state.map((task)=>(
                    <li key={task.id}>
                      <input type="checkbox"/>
                      <span>{task.text}</span>
                      <button>Edit</button>
                      <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
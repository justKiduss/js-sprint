export default function Todoitems({todos,dispatch}){

    return(
        <div style={{textAlign:"center"}}>
            <input type="text" placeholder="search you todos"/>
            <select>
                <option value="All">All</option>
                <option value="Work">Work</option>
                <option value="Social">Social</option>
                <option value="School">School</option>
            </select>
            <button>Search</button>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.done}/>
                        <span>{todo.text}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
           </ul>
           </div>
        </div>
    )
}
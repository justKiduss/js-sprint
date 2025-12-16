export default function TaskItems({state,dispatch}){

    return(
        <ul>
            {state.map((sta)=>(
                <li key={sta.id}>
                    <input type="checkbox"/>
                    <span>{sta.text}</span>
                    <button>Add subTask</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </li>
            ))}
        </ul>
    )
}
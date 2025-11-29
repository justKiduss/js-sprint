import {useState,useReducer,useEffect} from "react"
import TodoReducers from "../reducers/todo-reducers";
import Todoitems from "./Todoitems";
import { loadState,saveState } from "./persistence";
function TodoApp({}){
    const [todo,setTodos]=useState("");
    const [category,setCategory]=useState("All")
    const [todos,dispatch]=useReducer(TodoReducers,loadState())
    useEffect(()=>{
        saveState(todos);
    },[todos])

    function handleSubmit(e){
        e.preventDefault();
        if(!todo.trim()) return;

        dispatch({
            type:"added",
            id:Date.now(),
            text:todo,
            category:category,
            done:false
        })
       setTodos("");
    }
    console.log(todos);
return(
    <div style={{margin:"30px"}}>
        <h1 style={{textAlign:"center"}}>Todo App</h1>
        <form onSubmit={handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <input type="text" onChange={(e)=>setTodos(e.target.value)} value={todo}/>
            <select onChange={(e)=>setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Work">Work</option>
                <option value="Social">Social</option>
                <option value="School">School</option>
            </select>
            <button type="submit">Add Tasks</button>
        </form>
        <div>
            <Todoitems todos={todos} dispatch={dispatch}/>
        </div>
    </div>
)
}
export default TodoApp;
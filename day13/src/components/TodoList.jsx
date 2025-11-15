import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
function TodoList(){
const [todos,setTodos]=useState([]);
const [newTodo,setNewTodo]=useState("");
const [error,setError]=useState("");

 function handleFormCheck(msg){
   setError(msg);
   setTimeout(()=>setError(""),3000);
 }
 function handleDelete(id){
   setTodos(todos.filter((todo,_)=>( //array.filter((element, index, array) => ...)   ( _ ) → the index (ignored)
      todo.id!==id
   )))
 }
 function handleCheck(id){
  setTodos(todos.map((todo)=>(
    todo.id===id?{...todo,done:!todo.done}:todo
  )))
 }

    return(
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"90%",height:"100vh"}}>
    <div>
    <TodoForm error={error} setNewTodo={setNewTodo} newTodo={newTodo} setTodos={setTodos} handleFormCheck={handleFormCheck} todos={todos}/>
    <TodoItem todos={todos} error={error} handleDelete={handleDelete} handleCheck={handleCheck}/>
    </div>
  </div>
    )
}
export default TodoList;
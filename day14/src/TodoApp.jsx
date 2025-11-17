import { useEffect, useState } from "react";
import CompeletedCount from "./CompletedCount";
function TodoApp(){
    const [todos,setTodos]=useState([]);
    
      useEffect(()=>{
          const tasks=localStorage.getItem("todos");
          if(tasks){
          setTodos(JSON.parse(tasks));
          }
        },[])
      useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
        },[todos])
    function handleSubmit(e){
     e.preventDefault();
       
     const value=e.target.todo.value;
     if(!value.trim()){
        return;
     }

     setTodos([...todos,{id:Date.now(),text:value,done:false}])
     e.target.reset()
      
    }
    function handleCheck(id){
       setTodos(todos.map((todo)=>(
        todo.id===id?{...todo,done:!todo.done}:todo
       ))
    )
    }
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"90%"}}>
            <div>
           <form onSubmit={handleSubmit}>
            <input type="text" name="todo" style={{margin:"10px"}}/>
            <button type="submit">submit</button>
           </form>
           <ul>
              {todos.map((todo)=>(
                
                    <li key={todo.id}>
                        <input type="checkbox" onChange={()=>handleCheck(todo.id)} checked={todo.done}/>
                        <span style={{margin:"10px"}}>{todo.text}</span>
                        </li>
        
              ))}
           </ul>
           <CompeletedCount todos={todos}/>
        </div>
        </div>
    )
}
export default TodoApp;
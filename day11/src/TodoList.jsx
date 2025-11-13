import { useState } from "react";

function TodoList(){
    const [datas,setData]=useState([]);
    const [todo,setTodo]=useState("");
    const [error,setError]=useState("");
    
    function formCheck(msg){
      setError(msg);
      setTimeout(()=>setError(" "),3000);
    }

    const handleSubmit=(e)=>{
     e.preventDefault();
     if(!todo.trim()){
        formCheck("the field can't be empty");
        return;
     }
     if(datas.some((item)=>item.text===todo)){
       formCheck("task that are already in can't be written again");
        return; 
     }
     setData([...datas,{text:todo,done:false,id:Date.now()}]); // using spread operator to expand the data array
     setTodo("");
    }

    function handleDelete(index){
        setData(datas.filter((_,i)=>
           i!==index
        ));
    }
    
    function handleCheck(index){
        setData(datas.map((items,i)=>(
            index===i?{...items,done:!items.done}:items
        )))
    }

    return(
        <div style={{width:"90%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div>
                <h1>TodoList</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
                <button type="submit">Add Task</button>
                {error?<p>{error}</p>:""}
                </form>
                <ul style={{listStyleType:"none"}}>
                    {datas.map((item,index)=>(
                        <div key={item.id}>
                    <li>
                    <input type="checkbox" checked={item.done} onChange={()=>handleCheck(index)} style={{margin:"10px"}}/>
                    <span style={{color:item.done?"red":"black"}}>{item.text}</span>
                    <button type="button" onClick={()=>handleDelete(index)} style={{margin:"10px"}}>Delete</button>
                    </li>
                    </div>
                    ))
                    }
                </ul>
                </div>
        </div>
    )
}
export default TodoList;


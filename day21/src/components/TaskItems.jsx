import {useState} from "react";
export default function TaskItems({dispatch,categories}){
    const [selectedState,setSelectedState]=useState("all");
    const [editId,setEditId]=useState("");
    const [editText,setEditText]=useState("");
    function handleEdit(id,text){
        setEditId(id)
        setEditText(text)
    }
    const tasks=categories.items;
    const container=selectedState==="all"?
                    tasks.all:tasks[selectedState.toLowerCase()]
    return(
      <>
      <div style={{textAlign:"center"}}>
          <input type="text" placeholder="Search Tasks"/>
          <select onChange={(e)=>setSelectedState(e.target.value)} value={selectedState}>
              <option value="all">All</option>
              <option value="Work">Work</option>
              <option value="School">School</option>
              <option value="Social">Social</option>
          </select>
          <ul style={{listStyle:"none"}}>
            {container.map((cate)=>(
                <li key={Date.now()}>
                    <input type="checkbox" checked={cate.done} onChange={()=>dispatch({
                        type:"checkTask",
                        id:cate.id            
                    })}/>
                    <span>{cate.text}</span>
                    <button onClick={()=>handleEdit(cate.id,cate.text)}>Edit</button>
                    {editId===cate.id?<>
                    <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                    <button onClick={()=>{dispatch({
                      type:"editTask",
                      editedId:editId,
                      editedText:editText
                    });
                    setEditId("")
                    setEditText("");
                    }}>save</button>
                    </>:
                    ""}
                    <button type="button" onClick={()=>dispatch({
                      type:"deleteTask",
                      id:cate.id
                    })}>Delete</button> 
                </li>
            ))}
          </ul>
      </div>
    </>
  )
}
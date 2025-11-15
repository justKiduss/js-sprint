function TodoForm(props){ 
    
    function handleSubmit(e){
       e.preventDefault();
       if(!props.newTodo.trim()){
         props.handleFormCheck("empty tasks are not allowed");
         return;
       }
       if(props.todos.some((todo)=>todo.text===props.newTodo)){
        props.handleFormCheck("can't add task that already added");
        return;
       }

    props.setTodos([...props.todos,{text:props.newTodo,done:false,id:Date.now()}]);
    props.setNewTodo("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={props.newTodo} onChange={(e)=>props.setNewTodo(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}
export default TodoForm;
export const initialState=[];

export function generateId(){
const uniqueId = new Date(Math.ceil(Math.random() * 1e13)).valueOf().toString(36);
// Sample output: '1x7kf3ygb'
return uniqueId;
}

export function loadTask(){
const task=localStorage.getItem("Tasks");
return JSON.parse(task);
}

export function saveTask(state){
    if(!state){
        return
    }
localStorage.setItem("Tasks",JSON.stringify(state));
}

export function filterTasks(filter,state){
switch(filter){
    case "High":{
        return state.filter((task)=>(
            task.priority==="High"
        ))
    }
    case "done":{
        return state.filter((task)=>(
            task.done
        ))
    }
}
}
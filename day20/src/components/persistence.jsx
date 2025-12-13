export function loadState (){
    try{
        const serialized=localStorage.getItem('todos');
        if(!serialized) return [];
        return JSON.parse(serialized);
    }catch(err){
        return [];
    }
}
export function saveState(todos){
    try{
        const serialized=localStorage.setItem('todos',JSON.stringify(todos))
    }catch(err){
        console.log(err);
    }
}


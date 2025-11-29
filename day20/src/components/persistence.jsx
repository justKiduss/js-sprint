export function loadState (){
    try{
        const serialized=localStorage.getItem("todos");
        if(!serialized) return [];
        return JSON.parse(serialized);
    }catch(err){
        return [];
    }
}
export function saveState(state){
    try{
        const serialized=JSON.stringify(state);
        localStorage.setItem("todos",serialized);
    }catch(err){
        console.log(err);
    }
}
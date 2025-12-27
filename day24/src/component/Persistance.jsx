export const initialState=[];

export function LoadState(){
  try{
        const task=localStorage.getItem("Task");
        if(!task){
            return [];
        }
        return JSON.parse(task);
  }catch(err){
        return []
  }
}

export function SaveState(state){
    try{
        localStorage.setItem("Task",JSON.stringify(state))
    }catch{
       return
    }
}

export function generateId(){
const uniqueId = new Date(Math.ceil(Math.random() * 1e13)).valueOf().toString(36);
// Sample output: '1x7kf3ygb'
return uniqueId;
}


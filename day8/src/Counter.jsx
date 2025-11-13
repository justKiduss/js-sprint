import {useState,useEffect} from "react"
const Counter=({initialCount})=>{
const [count,setCount]=useState(()=>{
let saved=localStorage.getItem("counter");
return isNaN(saved)?initialCount:JSON.parse(saved);
})



useEffect(()=>{
localStorage.setItem("counter",JSON.stringify(count));
},[count])

return (
<div >
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>setCount(count>0?count-1:0)}>-</button>
    
</div>
)}
export default Counter;

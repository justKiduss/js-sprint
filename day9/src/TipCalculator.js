import { useState} from "react";
const TipCalculator=()=>{
const [bill,setBill]=useState(0);
const [tip,setTip]=useState(0);
const [total,setTotal]=useState();
const [error,setError]=useState(false);
function handleCalclate(e){
    e.preventDefault();
    
    if(Number(bill < 0|| isNaN(bill))){
    setError("the bill the must greater 0");
    setError(()=>setError(false),3000);
    return;
}
    setTotal(bill+(bill*tip)/100);

}

return(
<div class="">
    <div className="">
    <form onSubmit={handleCalclate}>
        <input type="number" placeholder="bill amount" onChange={(e)=>setBill(Number(e.target.value))}/><br/>
        <select onChange={(e)=>setTip(Number(e.target.value))}>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
        </select><br/>
        <button type="submit">submit</button>
        <p>{error}</p>
        <p>{total?`the total is ${total}`:""}</p>
    </form>
</div>
</div>
)   
}
export default TipCalculator;
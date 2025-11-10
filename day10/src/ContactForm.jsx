import { useState,useEffect } from "react";

function ContactForm(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [errors, setErrors] = useState("");
// const [formDate,setFormData]=useState();
function handleSubmit(e){
    e.preventDefault();
    if(!name||!email||!message){
    setErrors(()=>"All fields are required",3000)
        
    }
if(name.length<2){
    setErrors(()=>"name must be geater than 2 letter",3000)
    
}
if(message.length<5){
    setErrors(()=>"message must be geater than 5 letter",3000)
    
}
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!regex.test(email)){
    setErrors(()=>"email doesn't fulfill regex format",3000);
    
}
console.log("name :"+name+"email :"+email+"message :"+message)
setEmail("");
setName("");
setMessage("");
}
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text" value={name} minLength={2} onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            <textarea type="text" onChange={(e)=>setMessage(e.target.value)} value={message}/><br/>
            <button type="submit">Submit</button>
            <p>{errors}</p>
           </form>
        </div>
    )
}
export default ContactForm;
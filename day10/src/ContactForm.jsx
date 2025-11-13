import { useState} from "react";

function ContactForm(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [errors, setErrors] = useState("");
// const [formDate,setFormData]=useState();
function showError(msg){
    setErrors(msg);
    setTimeout(()=>setErrors(""),3000);
}
function handleSubmit(e){
    e.preventDefault();
    if(!name||!email||!message){
    showError("All fields are required")
      return;  
    }
if(name.length<2){
    showError("name must be greater than 2 letter")
    return;
}
if(message.length<5){
    showError("message must be greater than 5 letter")
    return;
}
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!regex.test(email)){
    showError("email doesn't fulfill regex format");
    return;
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
            {errors && <p style={{ color: "red" }}>{errors}</p>}
           </form>
        </div>
    )
}
export default ContactForm;
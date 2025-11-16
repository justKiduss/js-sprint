import { useState } from "react";
function SignupForm(){
const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("")
const [message,setMessage]=useState("")
const handleValidation=(msg)=>{
   setError(msg)
   setTimeout(()=>setError(""),3000);
}

const handleSubmit=(e)=>{
e.preventDefault();
 if(username.length<3){
       handleValidation("username must be greater or equal to 3 letters");
       return;
    }
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if(!regex.test(email)){
     handleValidation("email must include @");
     return;
 }
 if(password.length<6){
    handleValidation("password must be equal or greater than 6 letters");
    return;
 }
  
 if(username&&password&&email){
setMessage("Account created");
}
setEmail("");
setPassword("");
setUsername("");
// setMessage("")

}
return(
<div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100vh",width:"90%"}}>
    <div>
        <form onSubmit={handleSubmit}>
            <label>username</label>
    <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} style={{margin:"10px"}}/><br/>
    <label>email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} style={{margin:"10px"}}/><br/>
    <label>password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} style={{margin:"10px"}}/><br/>
    {error?<p style={{color:"red"}}>{error}</p>:
    <button type="submit">submit</button>
    }
       </form>
    <p>{message}</p>

    </div>
    </div>
)
}
export default SignupForm;
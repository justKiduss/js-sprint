import { useState } from "react";
import DashBoard from "./component/DashBoard";
import Header from "./component/Header";


function App() {
  const [mode,setMode]=useState("Browser")
  const [query,setQuery]=useState("")
  const handleSearch=(value)=>{
      setQuery(value)
      setMode("search")
   }
  return (
     <>
        <Header onSearch={handleSearch}/>
        <DashBoard mode={mode} query={query}/>
     </>
  );
}

export default App;

import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import { useState } from "react";
function App(){
    const [mode,setMode]=useState("Browser");
    const [query,setQuery]=useState("");

    const handleSearch=(value)=>{
        setQuery(value);
        setMode("search")
    }
    return(
        <>
            <Header onSearch={handleSearch}/>
            <DashBoard mode={mode} query={query}/>
        </>
    )
}
export default App;
import DashBoard from "./components/Dashboard";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [query,setQuery]=useState("");
  const handleSearch=(value)=>{
    setQuery(value)
  }
  return (
      <>
        <div>
            <Header onSearch={handleSearch}/>
            <DashBoard query={query}/>
        </div>
      </>
  );
}

export default App;

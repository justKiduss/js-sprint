import DashBoard from "./components/DashBoard";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("browse");
  const [query, setQuery] = useState("");

  function handleSearch(value){
      setQuery(value);
      setMode("search");
  }
  return (
    <>
    <div style={{  width:"100%",height:"100vh"}}>
      <Header onSearch={handleSearch}/>
      <DashBoard mode={mode} query={query}/>
    </div>
    </>
  );
}

export default App;

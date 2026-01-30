import { useState } from "react";
import DashBoard from "./components/DashBoard";
import Header from "./components/Header";

function App() {
  const [query,setQuery]=useState("");
  function handleSearch(search){
    setQuery(search);
  }
  return (
          <>
            <Header onsearch={handleSearch}/>
            <DashBoard query={query}/>
          </>
  );
}

export default App;

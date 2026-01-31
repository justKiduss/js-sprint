import DashBoard from './Component/DashBoard';
import Header from './Component/Header';
import { useState } from 'react';

function App() {
  const [query,setQuery]=useState("");
  const [mode,setMode]=useState("Browser")

  function handleSearch(search){
      setQuery(search);
      setMode("search");
  }

  return (
    <>
      <Header onSearch={handleSearch}/>
      <DashBoard query={query} mode={mode}/>
    </>
  );
}

export default App;

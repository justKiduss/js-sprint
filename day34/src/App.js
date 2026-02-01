import { useState } from 'react';
import Header from './component/Header';
import DashBoard from './component/DashBoard';

function App() {
  const [query,setQuery]=useState("");
  const [mode,setMode]=useState("Browser");
  function handleSearch(search){
    setQuery(search);
    setMode("Search");
  }
  return (
      <>
        <div>
          <Header onSearch={handleSearch}/>
          <DashBoard mode={mode} query={query}/>
        </div>
      </>
  );
}

export default App;

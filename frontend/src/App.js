import { useState } from 'react';
import Header from './components/Header';
import DashBoard from './components/DashBoard';

function App() {
  const [query,setQuery]=useState("");

  function handleSearch(value){
    setQuery(value);
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

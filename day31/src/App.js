import { useState } from "react";
import DashBoard from "./component/DashBoard";
import Header from "./component/Header";

function App() {
  const [mode,setMode]=useState("Browser")
  let onSearch;
  return (
     <>
        <Header onSearch={onSearch}/>
        <DashBoard/>
     </>
  );
}

export default App;

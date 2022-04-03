import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Body from "./components/Body/Body";
import './App.css';

const App = ()=>{
  return(
    <>
      <div className="App">
        <Sidebar />
        <Body />
      </div>
     
    </>
  );
}

export default App;

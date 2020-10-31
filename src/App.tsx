import React from "react";
import EmpContainer from "./components/EmpContainer";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Team Directory</h1>
      </header>
      <div className="searchDiv">
        <SearchBar />
      </div>
      <EmpContainer />
    </>
  );
}

export default App;

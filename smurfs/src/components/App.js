import React from "react";
import "./App.css";
import SmurfForm from "./SmurfForm";
import GetSmurfsList from "./GetSmurfsList";
import SmurfList from "./SmurfList";

const App = () => {

    return (
      <div className="App">
        <GetSmurfsList />
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }


export default App;

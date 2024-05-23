import React from 'react';
import './App.css';
import {Star} from "./components/rating/Star";
import {Accordion} from "./components/accrodion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
  return (
    <div className="App">
        <Accordion/>
        <Rating/>
    </div>
  );
}

export default App;



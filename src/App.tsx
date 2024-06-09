import React from 'react';
import './App.css';
import {Star} from "./components/rating/Star";
import {Accordion} from "./components/accrodion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onoff/OnOff";

function App() {
  return (
    <div className="App">
        {/*<Accordion title={"Menu"}/>*/}
        {/*<Rating value={2}/>*/}
        <OnOff/>
    </div>
  );
}

export default App;



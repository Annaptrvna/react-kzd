import React from 'react';
import './App.css';
import {Star} from "./components/rating/Star";
import { ControlledAccordion} from "./components/accrodion/ControlledAccordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onoff/OnOff";

function App() {
  return (
    <div className="App">
        <ControlledAccordion title={"Menu"}/>
        {/*<Rating value={2}/>*/}
        {/*<OnOff/>*/}
        {/*<OnOff/>*/}
        {/*<OnOff/>*/}
    </div>
  );
}

export default App;



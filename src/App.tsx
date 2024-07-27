import React, {useState} from 'react';
import './App.css';
import {Star} from "./components/rating/Star";
import {Rating} from "./components/rating/Rating";
import {OnOff, OnOffType} from "./components/onoff/OnOff";

function App() {
    const [on, setOn] = useState<boolean>(false)

    const setOnStatus = (status: OnOffType) => {
        status === "off"? setOn(false) : setOn(true)
    }
  return (
    <div className="App">
        <Rating/>
        <OnOff onClick={setOnStatus} on={on}/>
        {/*<OnOff/>*/}
        {/*<OnOff/>*/}
    </div>
  );
}

export default App;



import React, {useState} from 'react';
import './App.css';
import {Star} from "./components/rating/Star";
import {Rating} from "./components/rating/Rating";
import {OnOff, OnOffType} from "./components/onoff/OnOff";
import {SelectOptions} from "./components/select/SelectOptions";

function App() {
    const [on, setOn] = useState<boolean>(false)

    const setOnStatus = (status: OnOffType) => {
        status === "off"? setOn(false) : setOn(true)
    }
    const cities = [
        {title: "Moscow", value: 1},
        {title: "Minsk", value: 2},
        {title: "New York", value: 3}
    ]
    const [option, setOption] = useState<number|null>(null)
  return (
    <div className="App">
        {/*<Rating/>*/}
        {/*<OnOff onClick={setOnStatus} on={on}/>*/}
        {/*<OnOff/>*/}
        {/*<OnOff/>*/}
        <SelectOptions value={option} onChange={setOption} items={cities}/>
    </div>
  );
}

export default App;



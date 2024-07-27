import {OnOff} from "./OnOff";
import {useState} from "react";

export default {
    component: OnOff
}

export const OnMode = () => {
    return (
        <OnOff on={true}  onClick={()=>{}}/>
    )
}

export const OffMode = () => {
    return (
        <OnOff on={false}  onClick={()=>{}}/>
    )
}

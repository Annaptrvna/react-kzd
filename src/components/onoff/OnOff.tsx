import {Button} from "./Button";
import {useState} from "react";
import s from "./OnOff.module.css"

export const OnOff = () => {
    const [on, setOn] = useState<boolean>(true)

    return (
        <>
            <Button  onClick={()=>setOn(false)} className={on ? "": s.off} name={"Off"}/>
            <Button  onClick={()=>setOn(true)} className={on? s.on : ""} name={"On"}/>
            <span className={`${s.circle} ${on ? s.on : s.off} `}></span>
        </>
    )
}
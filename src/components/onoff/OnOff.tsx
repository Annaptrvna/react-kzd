import {Button} from "./Button";
import {useState} from "react";
import s from "./OnOff.module.css"

export type OnOffType = "on"|"off"

type OnOffPropsType = {
    on: boolean
    onClick: (statusValue: OnOffType)=>void
}
export const OnOff = (props: OnOffPropsType) => {


    return (
        <>
            <Button  onClick={()=>props.onClick("off")} className={props.on ? "": s.off} name={"Off"}/>
            <Button  onClick={()=>props.onClick("on")} className={props.on ? s.on : ""} name={"On"}/>
            <span className={`${s.circle} ${props.on ? s.on : s.off} `}></span>
        </>
    )
}
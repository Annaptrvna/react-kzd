import React from "react";
import {RatingType} from "./Rating";

type StarType = {
    selected: boolean
    setValue: (value:RatingType) => void
    value: RatingType

}
export const Star = (props: StarType) => {

    return (
        <span onClick={()=>props.setValue(props.value)}> {
            props.selected ?
           <b>star </b> : "star"
        }
        </span>
    )
}
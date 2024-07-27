import React from "react";
import {RatingType} from "./Rating";

type StarType = {
    selected: boolean
    setValue: () => void
    // value: RatingType

}
export const Star = (props: StarType) => {

    return (
        <span onClick={props.setValue}> {
            props.selected ?
           <b>star </b> : "star"
        }
        </span>
    )
}
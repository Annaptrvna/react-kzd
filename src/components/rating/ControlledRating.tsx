import {Star} from "./Star";
import {Dispatch, SetStateAction, useState} from "react";
import {RatingType} from "./Rating";

type ControlledRatingType = {
    value: RatingType
    onClick: (value: RatingType) => void
}
export const ControlledRating = ({value, onClick}: ControlledRatingType) => {


    return (
        <div>
            <Star selected={value>0} setValue={()=>onClick(1)} />
            <Star selected={value>1} setValue={()=>onClick(2)} />
            <Star selected={value>2} setValue={()=>onClick(3)} />
            <Star selected={value>3} setValue={()=>onClick(4)} />
            <Star selected={value>4} setValue={()=>onClick(5)}/>
        </div>

    )
}
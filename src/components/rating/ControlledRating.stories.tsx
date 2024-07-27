import {ControlledRating} from "./ControlledRating";
import {useState} from "react";
import {RatingType} from "./Rating";

export default {
    component: ControlledRating,
    title: "ControlledRating stories"
}

export const EmptyStars = () => <ControlledRating value={0} onClick={()=>{}}/>
export const Stars1 = () => <ControlledRating value={1} onClick={()=>{}}/>
export const Stars2 = () => <ControlledRating value={2} onClick={()=>{}}/>
export const Stars3 = () => <ControlledRating value={3} onClick={()=>{}}/>
export const Stars4 = () => <ControlledRating value={4} onClick={()=>{}}/>
export const Stars5 = () => <ControlledRating value={5} onClick={()=>{}}/>

export const RatingChanging = () =>{
    const [rating, setRating] = useState<RatingType>(0)
    return (
    <ControlledRating value={rating} onClick={(value:RatingType)=>setRating(value)}/>
)
}
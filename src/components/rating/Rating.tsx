import {Star} from "./Star";

type RatingType ={
    value: number
}
export const Rating = (props: RatingType) => {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>

    )
}
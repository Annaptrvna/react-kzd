import {ButtonHTMLAttributes} from "react";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>


export const Button = ({name, onClick, className} : ButtonPropsType) => {
    return (

        <button className={className} onClick={onClick}>{name}</button>
    )
}
import inputStories from "./input.stories";
import {ChangeEvent, useRef, useState} from "react";



export default {
    title: "Input"

}
export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e)=>setValue(e.currentTarget.value)}/>{value}</>
}
export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el=inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button> {value}
        {/*{console.log(value)}*/}
    </>
}

export const TrackCheckBox = () => {
    const [checked, setChecked] = useState(false)

    const checkValue = (value: ChangeEvent<HTMLInputElement>) =>{
        setChecked(value.currentTarget.checked)
    }
    return (<input type="checkbox" onChange={(e)=>checkValue(e)} checked={checked}/>
    )
}

export const TrackSelectOption = () =>{
    const [value, setValue] = useState<string | undefined>(undefined)
    const selectValue = (e:ChangeEvent<HTMLSelectElement>) =>{
        setValue(e.currentTarget.value)
    }
    return (
        <select value={value} onChange={(e)=>selectValue(e)}>
            <option>none</option>
            <option value={"1"}>A</option>
            <option value={"2"}>B</option>
            <option value={"3"}>C</option>
        </select>
    )
}



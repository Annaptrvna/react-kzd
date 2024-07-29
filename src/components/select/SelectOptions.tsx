import {MenuItem, Select} from "@material-ui/core";
import styles from "./SelectOptions.module.css"
import {useEffect, useState} from "react";
type SelectPropsType = {
    value?: any
    onChange: (value: number)=>void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: number
}
export const SelectOptions = ({value, onChange, items}: SelectPropsType) => {
    const [active, setActive] = useState(false)

    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(i=> i.value === value)
    const hoveredElement = items.find(i=> i.value === hoveredElementValue)

    useEffect(()=>{
        setHoveredElementValue(value)
    },[value])
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: number) => {
        onChange(value)
        toggleItems()
    }
    const onMouseHoveredElement = (value: number) => setHoveredElementValue(value)

    const displayOptions = active && items.map((item, i)=><div
        onMouseEnter={()=>onMouseHoveredElement(item.value)}

        className={styles.selected + " " + (hoveredElement === item? styles.item: "")}
        onClick={()=>onItemClick(item.value)}
        key={item.value}>
        {item.title}</div>)

    const onKeyDownHandler = (key: string) => {
        if(key === "ArrowUp" || key=== "ArrowDown"){
            for(let i =0; i < items.length; i++) {
                if(items[i] === hoveredElement){
                    const newElement = key==="ArrowDown" ? items[i+1] : items[i-1]
                    if(newElement){
                        onChange(newElement.value)
                        return
                    }
                }
            }
        }
        if(key === "Enter") {
            toggleItems()
            return
        }
        if(value === null){
            onChange(items[0].value)
        }



    }

    return (
        <>
            <div className={styles.select}
                 onKeyDown={(e)=>onKeyDownHandler(e.key)}
                 onBlur={toggleItems}
                 tabIndex={0}
            >
                <span
                    className={styles.main}
                    onClick={()=>setActive(!active)}
                >
                    {selectedItem ? selectedItem.title : "Select a city"}</span>
                <div className={styles.items}>
                    {displayOptions}
                </div>
            </div>
        </>
    )
}
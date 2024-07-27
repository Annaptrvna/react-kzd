import {MenuItem, Select} from "@material-ui/core";
import styles from "./SelectOptions.module.css"
import {useState} from "react";
type SelectPropsType = {
    value: any
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
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: number) => {
        onChange(value)
        toggleItems()
    }
    const onMouseHoveredElement = (value: number) => setHoveredElementValue(value)

    const displayOptions = active && items.map(i=><div
        onMouseEnter={()=>onMouseHoveredElement(i.value)}
        className={styles.selected + " " + (hoveredElement === i? styles.item: "")}
        onClick={()=>onItemClick(i.value)}
        key={i.value}>
        {i.title}</div>)

    return (
        <>
            <div className={styles.select}>
                <span className={styles.main} onClick={()=>setActive(!active)}>
                    {selectedItem ? selectedItem.title : "Select a city"}</span>
                <div className={styles.items}>
                    {displayOptions}
                </div>
            </div>
        </>







    )
}
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {useReducer, useState} from "react";


type AccordionPropsType = {
    title: string
    onChangeMode?: () => void
    onClickItem: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

const reducer = (state:boolean, action: ActionType) => {
    switch(action.type) {
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error("Bad Action Type")
    }
}

export const UncontrolledAccordion = ({title, onClickItem, items }: AccordionPropsType) => {
    const [collapsed, dispatch] = useReducer(reducer, false)


    return (
        (
            <div>
                <AccordionTitle title={title} onChange={()=>dispatch({type: TOGGLE_CONSTANT})}/>
                {collapsed && <AccordionBody onClick={onClickItem} items={items}/>}
            </div>
        )
    )
}
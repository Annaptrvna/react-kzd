import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import {useState} from "react";

type AccordionType = {
    title: string

}
export const ControlledAccordion = (props: AccordionType) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={()=>setCollapsed(!collapsed)}>TOGGLE</button>
            {collapsed && <AccordionBody/>}
        </div>
    )
}
import {AccordionTitle} from "./AccordionTitle";

type AccordionType = {
    title: string
}
export const Accordion = (props: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
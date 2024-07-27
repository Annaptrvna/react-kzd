import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChangeMode: () => void
    onClickItem: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export const Accordion = ({title, collapsed, onChangeMode, onClickItem, items }: AccordionPropsType) => {
    return (
        (
            <div>
                <AccordionTitle title={title} onChange={onChangeMode}/>
                {collapsed && <AccordionBody onClick={onClickItem} items={items}/>}
            </div>
        )
    )
}
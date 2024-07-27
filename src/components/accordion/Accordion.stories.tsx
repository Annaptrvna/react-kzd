// Replace your-framework with the name of your framework
import type {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions"
import {Accordion} from "./Accordion";
import {useState} from "react";
export default {
    component: Accordion
}

const onClickCallback = action("Item has been clicked")
const onChangeCallback = action("Mode has been changed")

export const users =
    [{title: "Anna", value: 1},
        {title: "Dima", value: 2},
        {title: "Katya", value: 3},
        {title: "Mila", value: 4} ]
export const CollapsedAccordion = () => {


    return (
        <Accordion collapsed={false}
        title={"CollapsedAccordion"}
                   onClickItem={onClickCallback}
                   onChangeMode={onChangeCallback}
                   items={users}
        />
    )
}

export const UnCollapsedAccordion = () => {
    return (
        <Accordion collapsed={true}
                   title={"UnCollapsedAccordion"}
                   onClickItem={onClickCallback}
                   onChangeMode={onChangeCallback}
                   items={users}
        />
    )
}

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <Accordion
            title={"Users"}
            onChangeMode={()=>setCollapsed(!collapsed)}
            onClickItem={(value)=>alert(`User with ID ${value} has been clicked`)}
            items={users}
            collapsed={collapsed}
        />
    )
}




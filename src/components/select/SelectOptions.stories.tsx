import {SelectOptions} from "./SelectOptions";
import {users} from "../accordion/Accordion.stories";
import {useState} from "react";

export default {
    component: "Select"
}
export const selectWithValue = () => {
    const cities = [
        {title: "Moscow", value: 1},
        {title: "Minsk", value: 2},
        {title: "New York", value: 3}
    ]
    const [option, setOption] = useState<number>(2)
    return (
        <SelectOptions
        value={option}
        onChange={setOption}
        items={cities}
        />
    )
}

export const selectWithoutValue = () => {
    const cities = [
        {title: "Moscow", value: 1},
        {title: "Minsk", value: 2},
        {title: "New York", value: 3}
    ]
    const [option, setOption] = useState<number|null>(null)
    return (
        <SelectOptions
            value={option}
            onChange={setOption}
            items={cities}
        />
    )
}


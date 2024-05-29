import React from "react";

type StarType = {
    selected: boolean
}
export const Star = (props: StarType) => {
    return (
        <> {
            props.selected ?
            <span><b>Star </b> </span>
            : <span>Star </span>
        }
        </>

    )
}
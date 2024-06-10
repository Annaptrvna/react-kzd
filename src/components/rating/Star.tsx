import React from "react";

type StarType = {
    selected: boolean
    setValue: ()=>void
}
export const Star = (props: StarType) => {
    return (
        <> {
            props.selected ?
            <button onClick={props.setValue}><b>Star </b> </button>
            : <button onClick={props.setValue}>Star </button>
        }
        </>

    )
}
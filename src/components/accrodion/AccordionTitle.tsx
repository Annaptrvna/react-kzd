type AccordionTitleType = {
    title: string
    onClick: () => void
}

export const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <div>
            <h2 onClick={props.onClick}>{props.title}</h2>
        </div>
    )
}
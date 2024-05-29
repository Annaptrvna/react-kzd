type AccordionTitleType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}
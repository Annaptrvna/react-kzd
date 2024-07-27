type AccordionTitleType = {
    title: string
    onChange: () => void
}

export const AccordionTitle = ({title, onChange}: AccordionTitleType) => {
    return (
        <div>
            <h3 onClick={onChange}>{title}</h3>
        </div>
    )
}
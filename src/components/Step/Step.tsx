import React from "react"
import './step.css'

type PropsType = {
    number: string
    title: string
    description: string
}

const Step:React.FC<PropsType> = ({number, title, description}) => {
    return (
        <div className='step with-neon'>
            <h3>{number}</h3>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
export default Step

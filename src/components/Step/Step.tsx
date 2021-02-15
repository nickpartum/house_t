import React from "react"
import './feature.css'

type PropsType = {
    icon?: string
    title: string
    description: string
}

const Feature:React.FC<PropsType> = ({icon, title, description}) => {
    return (
        <div className='feature with-neon'>
            <div className='icon-round'><img src={icon} alt={title}/></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Feature

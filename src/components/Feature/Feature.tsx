import React from "react"
import s from './feature.module.css'

type PropsType = {
    icon: string
    title: string
    description: string
}

const Feature:React.FC<PropsType> = ({icon, title, description}) => {
    return (
        <div className={s.container}>
            <div><img src={icon} alt={title}/></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
export default Feature

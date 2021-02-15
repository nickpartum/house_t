import React from "react"
<<<<<<< HEAD
import './feature.css'

type PropsType = {
    icon?: string
=======
import s from './feature.module.css'

type PropsType = {
    icon: string
>>>>>>> f174d2b67289e73c0c64f03d4ec2db77097a5561
    title: string
    description: string
}

const Feature:React.FC<PropsType> = ({icon, title, description}) => {
    return (
<<<<<<< HEAD
        <div className='feature with-neon'>
            <div className='icon-round'><img src={icon} alt={title}/></div>
            <h4>{title}</h4>
=======
        <div className={s.container}>
            <div><img src={icon} alt={title}/></div>
            <h3>{title}</h3>
>>>>>>> f174d2b67289e73c0c64f03d4ec2db77097a5561
            <p>{description}</p>
        </div>
    )
}
export default Feature

import React from "react"
<<<<<<< HEAD
import './step.css'

type PropsType = {
    number: string
=======
import './feature.css'

type PropsType = {
    icon?: string
>>>>>>> f174d2b67289e73c0c64f03d4ec2db77097a5561
    title: string
    description: string
}

<<<<<<< HEAD
const Step:React.FC<PropsType> = ({number, title, description}) => {
    return (
        <div className='step with-neon'>
            <h3>{number}</h3>
            <h4>{title}</h4>
=======
const Feature:React.FC<PropsType> = ({icon, title, description}) => {
    return (
        <div className='feature with-neon'>
            <div className='icon-round'><img src={icon} alt={title}/></div>
            <h3>{title}</h3>
>>>>>>> f174d2b67289e73c0c64f03d4ec2db77097a5561
            <p>{description}</p>
        </div>
    )
}
<<<<<<< HEAD
export default Step
=======
export default Feature
>>>>>>> f174d2b67289e73c0c64f03d4ec2db77097a5561

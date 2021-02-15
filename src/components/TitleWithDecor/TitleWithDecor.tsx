import React from "react"
import './titleWithDecor.css'

type PropsType = {
    title: string
}

const TitleWithDecor:React.FC<PropsType> = ({title}) => {
    return (
        <h2 className='with-decor'>{title}<span></span></h2>
    )
}

export default TitleWithDecor

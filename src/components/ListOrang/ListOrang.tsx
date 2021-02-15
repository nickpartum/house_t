import React from "react"
import './listOrang.css'

type PropsType = {
    title?: string
    list: Array<string>
    withIcon?: boolean
}

const ListOrang:React.FC<PropsType> = ({title, list,withIcon}) => {
    const listElements = list.map((element, key) => {
        return (<li key={key}>{element}</li>)
    })

    const listClassName = withIcon ? 'with-icon' : ''

    return (
        <div className='list'>
            <h4>{title}</h4>
            <ul className={listClassName}>
                {listElements}
            </ul>
        </div>
    )
}
export default ListOrang

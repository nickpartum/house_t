import React from "react"
import './emailForm.css'

export type EmailFormPropsType = {
    buttonName: string
    placeHolder: string
    icon?: string
}

const EmailForm:React.FC<EmailFormPropsType> = ({buttonName, placeHolder, icon= ''}) => {
    const inputClassName = (icon !== '') ? 'with-icon' : ''
    return (
        <div className="form-with-border">
            <form className="pure-form with-neon">
                {(icon !== '') && <img className='input-icon' src={icon} alt={'email'}/> }
                <input type="text" placeholder={placeHolder} className={inputClassName}/>
                <button type="submit" className="pure-button">{buttonName}</button>
            </form>
        </div>
    )
}

export default EmailForm

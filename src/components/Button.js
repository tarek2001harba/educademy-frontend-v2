import React from 'react'
import '../assets/css/button.css'

// default button styling:
// type: filled, size: small
const Button = ({ type, outlineStyle, size, text, width, margin, handleClick, dis}) => {
    const genBtnClass = () => {
        let btnClass = "sm-trans "
        switch (size) {
            case "medium":
                btnClass += "btn--medium "
                break
            case "big":
                btnClass += "btn--big "
                break
            default:
                btnClass += "btn--small "
                break
        }
        switch(type) {
            case "outlined":
                if (outlineStyle === "white") {
                    btnClass += "btn--outlined--white"
                }
                else {
                    btnClass += "btn--outlined--white"
                }
                break;
            case "done":
                btnClass += "btn--done "
                break;
            case "error":
                btnClass += "btn--error "
                break;
            case "cancel":
                btnClass += "btn--cancel "
                break;
            default:
                btnClass += "btn--filled "
                break
        }
        return btnClass
    }
    return (
        <div>
            <button className={genBtnClass()} 
            style={{width: width, marginLeft: margin, 
                    opacity: dis ? 0.5 : 1, pointerEvents: dis ? 'none' : 'all'}} 
            onClick={handleClick} 
            disabled={dis}>{ text }</button>
        </div>
    )
}

export default Button

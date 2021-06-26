import React from 'react'
import '../assets/css/button.css'

// default button styling:
// type: filled, size: small
const Button = ({ type, outlineStyle, size, text, width, margin, onClick }) => {
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
        if (type === "outlined") {
            if (outlineStyle === "white") {
                btnClass += "btn--outlined--white"
            }
            else {
                btnClass += "btn--outlined--white"
            }
        }
        else {
            btnClass += "btn--filled "
        }
        return btnClass
    }
    return (
        <div>
            <button className={genBtnClass()} style={{width: width, marginLeft: margin}} onClick={onClick}>{ text }</button>
        </div>
    )
}

export default Button

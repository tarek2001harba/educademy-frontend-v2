import React from 'react'
import '../assets/css/message.css'
// type either error or normal ::default (means everything is going OK)
// style is for conditional styling when needed
const Message = ({message, type, style}) => {
    return (
        <div className={type === "error" ? "message error" : "message normal"} style={style}>
            <p>{message}</p>
        </div>
    )
}

export default Message

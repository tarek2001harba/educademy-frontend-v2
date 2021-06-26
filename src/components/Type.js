import React from 'react'
import '../assets/css/type.css'
const Type = ({type, icon}) => {
    return (
        <div className="type">
            <span className="type__icon"><img src={icon} alt=""/></span>
            <span className="type__name">{type}</span>
        </div>
    )
}

export default Type

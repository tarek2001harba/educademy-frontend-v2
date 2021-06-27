import React from 'react'
import '../assets/css/infofield.css'

const InfoField = ({fieldName, info}) => {
    return (
        <div className="info-field">
            <span className="info-field__name">{fieldName}:</span>
            <span className="info-field__info">{info}</span>
        </div>
    )
}

export default InfoField

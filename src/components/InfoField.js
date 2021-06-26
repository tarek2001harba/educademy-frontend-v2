import React from 'react'
import '../assets/css/infofield.css'

const InfoRow = (fieldName, info) => {
    return (
        <div className="info-field">
            <span className="info-field__name">{fieldName}:</span>
            <span className="info-field__info">{info}</span>
        </div>
    )
}

export default InfoRow

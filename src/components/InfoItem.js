import React from 'react'
import '.././assets/css/infoitem.css'
const InfoItem = ({fieldName, info}) => {
    return (
        <div className="info-item">
            <span className="info-item__name">{fieldName}:</span>
            <span className="info-item__info">{info}</span>
        </div>
    )
}

export default InfoItem

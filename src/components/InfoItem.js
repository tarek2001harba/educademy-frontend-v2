import React from 'react'
import '.././assets/css/infoitem.css'
const InfoItem = ({fieldName, info, centered}) => {
    const centerStyle = centered ? {textAlign : 'center'} : {}
    return (
        <div className="info-item">
            <span className="info-item__name" style={centerStyle}>{fieldName}:</span>
            <span className="info-item__info" style={centerStyle}>{info}</span>
        </div>
    )
}

export default InfoItem

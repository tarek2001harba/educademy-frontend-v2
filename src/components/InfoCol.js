import React from 'react'
import '../assets/css/infoCol.css'
const InfoCol = ({title, info, ext}) => {
    return (
        <div className="info-col">
            <div className="info-col__title">
                <h5>{title}</h5>
            </div>
            <div className="info-col__info">
                <h5>{info}</h5>
            </div>
            <div className="info-col__ext">
                <h5>{ext}</h5>
            </div>
        </div>
    )
}

export default InfoCol

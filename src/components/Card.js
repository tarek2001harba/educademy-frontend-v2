import React from 'react'
import '../assets/css/card.css'
const Card = (props) => {
    const cardStyling = {
        minWidth: props.width,
        height: props.height,
        background: props.bg,
        marginRight: props.marginRight,
        border: props.border
    }
    return (
        <div className="card" style={cardStyling} >
            {props.children}
        </div>
    )
}
Card.defaultProps = {
    bg: "var(--darkGrey)",
    marginRight: "0px"
}
export default Card
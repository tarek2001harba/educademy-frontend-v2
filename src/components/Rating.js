import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import StarIcon from '@material-ui/icons/Star'
import '../assets/css/rating.css'
const Rating = ({ rating, color, margin }) => {
    const rateStyle = {
        color: color,
        nargin: margin
    }
    return (
        <div className="rating">
            <div className="rating-stars" style={rateStyle}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
            </div>
            <div className="rating__rate-info" style={rateStyle}>
                <span className="rating__rate">4.8</span>
                {/* <span className="rating__users-num">(49,764)</span> */}
            </div>
        </div>
    )
}
const defaultProps = {
    color: "var(--white)"
}
export default Rating

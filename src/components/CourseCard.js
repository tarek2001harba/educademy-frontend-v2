import React from 'react'
import Rating from './Rating'
import '../assets/css/courseCard.css'
import Button from './Button'
const CourseCard = ({ enrolled, section, image, title, creator }) => {
    // const buttons = enrolled ?
    //     (<div className="course-card__cta">
    //         <Button type="outlined" text="Leave Course" size="big"/>
    //         <Button type="filled" text="Pick Up Where You Left"  size="big" margin="1rem"/>
    //     </div>) :
    //     (<div className="course-card__cta">
    //         <Button type="filled" text="Enroll"/>
    //     </div>)
    return (
        <div className="course-card">
            <div className="course-card__overlay"></div>
            <div className="course-card__image">
                <img src={image} alt=""/>
            </div>
            <div className="course-card__title">
                <h5>{ title }</h5>
            </div>
            <div className="course-card__creator">
                <h5><span className="span--normal">-By</span> { creator }</h5>
            </div>
            <div className="course-card__students-info">
                <div className="course-card__rating">
                    <Rating />
                </div>
                <span className="">|</span>
                <span className="course-card__students-num" style={{ fontWeight: "bold" }}>1000,000 <span style={{ fontWeight: "normal" }}>students</span></span>
            </div>
            <div className="course-card__skill-level">
                <p>Beginner</p>
            </div>
            <div className="course-card__cta">
                <Button type="filled" text="More Info" />
            </div>
        </div>
    )
}

export default CourseCard

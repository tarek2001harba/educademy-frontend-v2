import React from 'react'
import Rating from './Rating'
import ProgressBar from './ProgressBar'
import '../assets/css/classCourse.css'
import Button from './Button'
const ClassCourse = ({ chapter, lesson, image, title, creator }) => {
    return (
        <div className="class-course">
            <div className="class-course__info">
                <div className="class-course__overlay"></div>
                <div className="class-course__image">
                    <img src={image} alt=""/>
                </div>
                <div className="class-course__title">
                    <h4>{ title }</h4>
                </div>
                <div className="class-course__creator">
                    <h5>{ creator }</h5>
                </div>
            </div>
            <div className="class-course__action">
                <div className="class-course__action-title">
                    <p>Where You Left</p>
                </div>
                <div className="class-course__chapter">
                    <h5><span className="span--normal">Chapter: </span> {chapter}</h5>
                </div>
                <div className="class-course__lesson">
                    <h5><span className="span--normal">Lesson: </span> {lesson}</h5>
                </div>
                <ProgressBar prog="50"/>
                <div className="class-course__cta">
                    <Button type="outlined" text="Leave Course" size="big"/>
                    <Button type="filled" text="Pick Up Where You Left" size="big" margin="1rem" />
                </div>
            </div>
        </div>
    )
}

export default ClassCourse

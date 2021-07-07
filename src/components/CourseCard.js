import React from 'react'
import {Link} from 'react-router-dom'
import {Rating} from '@material-ui/lab'
import '../assets/css/courseCard.css'
import Button from './Button'
const CourseCard = ({ enrolled, section, cid, thumb, title, creator, level, language, period, rate, studentsNum, key }) => {
    // const buttons = enrolled ?
    //     (<div className="course-card__cta">
    //         <Button type="outlined" text="Leave Course" size="big"/>
    //         <Button type="filled" text="Pick Up Where You Left"  size="big" margin="1rem"/>
    //     </div>) :
    //     (<div className="course-card__cta">
    //         <Button type="filled" text="Enroll"/>
    //     </div>)
    return (
        <Link to={"course/"+cid}>
            <div className="course-card" key={key}>
                <div className="course-card__overlay"></div>
                <div className="course-card__image">
                    <img src={"https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt=""/>
                </div>
                <div className="course-card__title">
                    <h5>{ title }</h5>
                </div>
                <div className="course-card__creator">
                    <h5><span className="span--normal">By</span> { creator }</h5>
                </div>
                <div className="course-card__sub-info">
                    <p>{level} | {language} | {period}</p>
                </div>
                {/* <div className="course-card__cta">
                    <div key={key}>
                        <Button type="filled" text="More Info"/>
                    </div>
                </div> */}
            </div>
        </Link>
    )
}

export default CourseCard

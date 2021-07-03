import React, {useContext, useState, useEffect} from 'react'
import UserContext from '../contexts/UserContext'
import ProgressBar from './ProgressBar'
import { Link } from 'react-router-dom'
import Message from './Message'
import axios from 'axios'
import '../assets/css/classCourse.css'
import Button from './Button'
const ClassCourse = ({ cid, chapter, lesson, image, title, creator }) => {
    const { user } = useContext(UserContext)
    const [ enrolled, setEnrolled ] = useState(true)
    const [allowUnenroll, setAllowUnenroll] = useState(false)
    useEffect(() => {
    axios.post('/registeration/check.php', {'cid' : cid, 'sid' : user.sid}).then(res => {
        setAllowUnenroll(res.data.allowUnenroll)
    }).catch(err => console.log(err))
    }, [])
    const unenroll = () => {
        axios.post('/registeration/unenroll.php', {
            cid : cid,
            sid : user.sid
        }).then(res => {
            console.log(res)
            setEnrolled(false);
        }).catch(err => console.log(err))
    }
    return enrolled ? (
        <Link to={"/course/"+cid}>
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
                        {allowUnenroll ? 
                        <Button type="outlined" text="Leave Course" size="big" handleClick={unenroll}/> :
                        <Button type="outlined" text="Can Not Leave Course" size="big" dis={true}/>
                        }
                        <Button type="filled" text="Pick Up Where You Left" size="big" margin="1rem" />
                    </div>
                </div>
            </div>
        </Link>
        
    ) : (
    <div className="class-course">
        <Message type="error" message="You are not enrolled in this course anymore"/>
    </div>)
}

export default ClassCourse

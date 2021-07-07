import React, {useEffect, useState,  useContext} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button'
import InfoCol from '../../components/InfoCol'
import RatingCard from '../../components/RatingCard'
import Field from '../../components/Field'
import InfoItem from '../../components/InfoItem'
import ChaptersAccordion from '../../components/ChaptersAccordion'
import UserContext from '../../contexts/UserContext'
import RegisteredContext from '../../contexts/RegisteredContext'
import SubscribedContext from '../../contexts/SubscribedContext'
import Loading from '../../components/Loading'
//material ui
import { Rating } from '@material-ui/lab'
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import axios from 'axios'
import './course.css'

const Course = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext) 
    const [courseLoading, setCourseLoading] = useState(true)
    // const [rateLaod, setCourseLoading] = useState(true)
    const [courseInfo, setCourseInfo] = useState({chapters : []})
    const {registered, setRegistered} = useContext(RegisteredContext)
    const {subscribed, setSubscribed} = useContext(SubscribedContext)
    const [rating, setRating] = useState()
    const [rated, setRated] = useState(false)
    const [rateVal, setRateVal] = useState(2)
    const [allowUnenroll, setAllowUnenroll] = useState(false)
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    useEffect(() => {
        axios.post('/course/getCourse.php', {'id' : id}).then(res => {
            setCourseInfo(res.data)
            console.log(res)
        }).catch(err => console.log(err))

        // gets rating if rated previously, if not, it does nothing
        axios.post('/rating/getUserRating.php', {sid : user.sid, cid : id}).then(res => {
            setRating(res.data.result)
            setRated(res.data.result ? true : false)
        }).catch(err => console.log(err))
        setCourseLoading(false)
    }, [])

    // check if registered
    useEffect(() => {
        axios.post('/registeration/check.php', {'cid' : id, 'sid' : user.sid}).then(res => {
            setRegistered(res.data.registered)
            setAllowUnenroll(res.data.allowUnenroll)
        }).catch(err => console.log(err))
    }, [registered])

    const updateRate = (e, rate) => {
        setRateVal(rate)
    }

    const rate = () => {
        const comment = document.querySelector('#rating-comment')
        const sendRating = {
            sid : user.sid, 
            cid : id, 
            comment : comment.value, 
            rate: rateVal
        }
        axios.post('/rating/create.php', sendRating).then(res => {
            console.log(res)
            setRating(sendRating)
            setRated(true)
        }).catch(err => console.log(err))
    }
    
    const enroll = () => {
        axios.post('/registeration/enroll.php', {
            cid : courseInfo.cid,
            sid : user.sid
        }).then(res => {
            console.log(res)
            if(res.status === 200){
                setRegistered(true);
            }
        }).catch(err => console.log(err))
    }

    const unenroll = () => {
        axios.post('/registeration/unenroll.php', {
            cid : courseInfo.cid,
            sid : user.sid
        }).then(res => {
            console.log(res)
            if(res.status === 200){
                setRegistered(false);
            }
        }).catch(err => console.log(err))
    }
    const cta = (
        <div className="course__cta">
            {user.signed ? 
                (user.type === "Student") ? 
                    (subscribed ?
                        (registered === false ? 
                            <Button width="250px" 
                            text="Enroll Now" handleClick={enroll}/> :
                            (allowUnenroll ? 
                                <Button width="250px" type="cancel" text="Leave Course" handleClick={unenroll} /> : 
                                (<div>
                                    <p>Already enrolled, view it in your <Link to="/">classroom</Link>.</p>
                                    <p>To unenroll you need at least 30 days from the day you enrolled.</p>
                                </div>)
                            )
                        ) : 
                        ( <Link to="/plans"><Button width="250px" type="error" text="Subscribe to a Plan"/></Link>) 
                    ) : 
                    (<Button width="250px" text="Teachers Can Not Enroll" dis={true}/>) :
                (<Link to="/registeration/sign-in"><Button width="250px" type="error" text="Sign in to Enroll"/></Link>)
            }
        </div>
    )
    return courseLoading ? <Loading /> : (
        <div className="course">
            <header className="course__header" style={{background : 'url('+courseInfo.thumb+')'}}>
                <div className="course__bg-overlay">

                </div>
                <div className="course__title">
                    <h4>{courseInfo.title}</h4>
                </div>
                <div className="course__teacher">
                    <p><span className="span--normal">By </span>{courseInfo.teacher}</p>
                </div>
                <div className="course__desc">
                    <p>{courseInfo.description}</p>
                </div>
                {cta}
            </header>
            <main className="course__details align">
                <div className="course__info">
                    <InfoCol title="Estimated Time" info={courseInfo.period}/>
                    <InfoCol title="Skill Level" info={courseInfo.level}/>
                    <InfoCol title="Category" info={courseInfo.category}/>
                    <InfoCol title="Language" info={courseInfo.language}/>
                </div>
                <div className="course__chapters">
                    <div className="section-title">
                        {registered ? 
                            <h3 className="title-color">Chapters</h3> :
                            <h3 className="title-color">What You'll Learn</h3> 
                        }
                    </div>
                    <div className="chapters__list">
                        <ChaptersAccordion 
                            chapters={courseInfo ? courseInfo.chapters : []}
                            courseId={id}
                        />
                    </div>
                </div>
                <div className="course__ratings">
                    {registered ? (
                        rated ? (
                            <div>
                                <div className="rating-title">
                                    <h3 className="title-color">Your Rating</h3>
                                </div>
                                <div className="course__rating">
                                    {console.log(rating.rate)}
                                    <Rating name="course-rating" value={rating.rate} readOnly={true} size="large"/>
                                    <InfoItem fieldName="Comment" info={rating.comment} centered={true}/>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="rating-title">
                                    <h3 className="title-color">Leave Your Thoughts</h3>
                                </div>
                                <div className="course__rating">
                                    <Rating name="course-rating" defaultValue={1} size="large" onChange={updateRate}/>
                                    <div className="rating__comment">
                                        <Field fieldName="Comment" id="rating-comment"/>
                                    </div>
                                    <div className="rating__cta">
                                        <Button text="submit" handleClick={rate} size="medium"/>
                                    </div>
                                </div>
                            </div>
                        )
                    ) : (
                        <div>
                            <div className="section-title">
                                <h3 className="title-color">What Students Say</h3>
                            </div>
                            <div className="course__ratings-container">
                                <RatingCard />
                                <RatingCard />
                                <RatingCard />
                                <RatingCard />
                                <RatingCard />
                                <RatingCard />
                            </div>
                        </div>
                    )}
                </div>
                {registered ? null : (
                    <div className="course__inv">
                        <div className="course__inv-title">
                            <h4>{courseInfo.title}</h4>
                            <p>Enroll today, and start putting your skills to work!</p>
                        </div>
                        {cta}
                    </div>
                )}
                
            </main>
        </div>
    )
}

export default Course

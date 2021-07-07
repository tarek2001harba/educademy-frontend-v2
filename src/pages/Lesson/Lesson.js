import React, { useState, useEffect, useContext } from 'react'
import Button from '../../components/Button'
import Type from '../../components/Type'
import Resources from '../../components/Resources'
import ReadingsIcon from '../../assets/img/icons/readings.svg'
import ResourcesIcon from '../../assets/img/icons/resources.svg'
import Loading from '../../components/Loading'
import NotAllowed from '../errors/NotAllowed'
import { Link, useParams } from 'react-router-dom'
import '../Lesson/lesson.css'
import axios from 'axios'
import LessonTitleContext from '../../contexts/LessonTitleContext'
import UserContext from '../../contexts/UserContext'
import SubscribedContext from '../../contexts/SubscribedContext'
import RegisteredContext from '../../contexts/RegisteredContext'
const Lesson = () => {
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    const lid = parseInt(useParams()['lid'])
    const cid = useParams()['cid']
    const {user} = useContext(UserContext)
    const {subscribed} = useContext(SubscribedContext)
    const {registered} = useContext(RegisteredContext)
    const {setLessonTitle} = useContext(LessonTitleContext)
    console.log(subscribed)
    console.log(registered)
    const [ lessonInfo, setLessonInfo ] = useState()
    const [ loading, setLoading ] = useState(true)
    const [ next, setNext ] = useState()
    const [ back, setBack ] = useState()
    const [ nav, setNav] = useState()
    useEffect(() => {
        axios.post('/lesson/get.php', {id : lid}).then(res => {
            console.log(res)
            setLessonInfo(res.data)
            setNav([res.data.nav_flesson, 
                res.data.nav_lessons + res.data.nav_flesson - 1, 
                res.data.nav_lessons]) //[first lesson in chapter, last lesson in chapter, number of lessons in the same chapter]
            setLessonTitle(res.data.title)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if(typeof(nav) !== "undefined"){
            setBack(lid === nav[0] ? -1 : lid-1)
            setNext(lid === nav[1] ? -1 : lid+1)
        }
    }, [loading])
    
    const navBack = () => {
        setBack(lid-1 < nav[0] ? -1 : lid-1 )
    } 
    const navNext = () => {
        setNext(lid+1 > nav[1] ? -1 : lid+1)
    } 
    return loading ? <Loading /> : (user.signed || subscribed || registered) ? (
        <div className="lesson">
            <div className="lesson__video">
                <iframe width="90%" height="80%" src={lessonInfo.video} title="Lesson Video" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen>
                    Failed to load the lesson's video
                </iframe>
            </div>
            <div className="lesson__materials">
                <div className="lesson__readings">
                    <Type type ="Readings" icon={ReadingsIcon} />
                    <p>{lessonInfo.content}</p>
                </div>
                <div className="lesson__resources">
                    <Type type ="Resources" icon={ResourcesIcon} />
                    <Resources resources={lessonInfo.resources} />
                </div>
            </div>
            <div className="lesson__nav">
                {back === -1 ? (
                    <Button type="outlined" text="Back" dis={true}/>
                ) : ( 
                    <Link to={"/course/"+cid+"/lesson/"+back}>
                        <Button type="outlined" text="Back" handleClick={navBack}/>
                    </Link>
                )
                }
                {typeof(nav) !== "undefined" ?
                    <span>{nav[2]-(nav[1]-lid)}/{nav[2]}</span> : 
                "..."    
                }
                {next === -1 ? (
                    <Button type="outlined" text="Next" dis={true}/>
                ) : ( 
                    <Link to={"/course/"+cid+"/lesson/"+next}>
                        <Button type="filled" text="Next" handleClick={navNext}/>
                    </Link>
                )
                }
                <span>action</span>
            </div>
        </div>
    ) : <NotAllowed />
}

export default Lesson

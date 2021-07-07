import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// react components
import Button from '../../components/Button'
import TabsRouter from '../../components/TabsRouter'
import Card from '../../components/Card'
import CourseCard from '../../components/CourseCard'
import Features from '../../components/Features'
import Plans from '../../components/Plans'
import ScrollArrows from '../../components/ScrollArrows/ScrollArrows'
import Loading from '../../components/Loading'
import axios from 'axios'

// js libs
// asset files
import './homepage.css'
import Bg from '../../assets/vid/bg.mp4'
// import artIcon from '../../assets/img/icons/art-icon.svg'
// import codingIcon from '../../assets/img/icons/coding-icon.svg'
// import bizIcon from '../../assets/img/icons/business-icon.svg'
// import sciIcon from '../../assets/img/icons/science-icon.svg'
// import photoIcon from '../../assets/img/icons/photo-icon.svg'
// import filmIcon from '../../assets/img/icons/film-icon.svg'
// import animIcon from '../../assets/img/icons/anim-icon.svg'

const Homepage = () => {
    const [courses, setCourses] = useState({'courses' : []})
    const [loading , setLaoding] = useState(true) // loading status for all courses
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    useEffect(() => {
        axios.post('/course/getAll.php', {
                offset : 0
        }).then(res => {
            setCourses(res.data)
            setLaoding(false)
        }).catch(err => console.log(err))
    }, [ ])
    return loading ? <Loading /> : (
        <div className="homepage">
            <header className="homepage__hero">
                <video className="homepage__bg" src={ Bg } muted autoPlay loop>
                    Failed to play the video.
                </video>
                <div className="homepage__hero-content align">
                    <div className="homepage__slogan-container">
                        <h1 className="text--white special-heading" >Unlock your possibilities.</h1>
                    </div>
                    <div className="homepage__cta-container">
                        <Link to="/registeration/sign-in"><Button type="filled" text="Get Started" /></Link>
                    </div>
                </div>
            </header>
            <main className="homepage__main">
                <div className="homepage__title">
                    <h3 className="title-color special-heading">Explore Your Intrests</h3>
                </div>
                <TabsRouter sections={ ["All Courses", "Design", "Animation", "Bussiness", "Programing", "Photo & Film"] }/>
                <div className="homepage__course-showcase align">
                    <ScrollArrows size="3.5rem" sElem="course-card">
                        {courses.courses.map(course => (
                            <Card width="500px" height="350px" marginRight="var(--cardMargin)" key={course['course_id']}>
                                <CourseCard 
                                    enrolled={false} section="home"
                                    cid={course.course_id}
                                    image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                                    title={course.title}
                                    creator={course.teacher}
                                    level={course.level}
                                    language={course.language}
                                    period={course.period}
                                    rate={course.rate}
                                    studentsNum={course.students_num}
                                    key={course.course_id}
                                />
                            </Card>
                        ))}
                    </ScrollArrows>
                </div>
                <Features />
                <section className="align">
                    <h3 className="title-color special-heading" style={{textAlign: "center", paddingTop: "7.5%"}}>Invest in Your Future & <br/> Start Achieving Your Goals Today!</h3>
                    <Plans />
                </section>
            </main>
        </div>
    )
}
export default Homepage

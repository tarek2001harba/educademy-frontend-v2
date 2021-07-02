import React, { useRef } from 'react'
// react components
import Button from '../../components/Button'
import TabsRouter from '../../components/TabsRouter'
import Card from '../../components/Card'
import CourseCard from '../../components/CourseCard'
import Features from '../../components/Features'
import Plans from '../../components/Plans'
import ScrollArrows from '../../components/ScrollArrows/ScrollArrows'
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
    const bgRef = useRef()
    return (
        <div className="homepage">
            <header className="homepage__hero">
                <video className="homepage__bg" ref={bgRef} src={ Bg } muted autoPlay loop>
                    Failed to play the video.
                </video>
                <div className="homepage__hero-content align">
                    <div className="homepage__slogan-container">
                        <h1 className="text--white special-heading" >Unlock your possibilities.</h1>
                    </div>
                    <div className="homepage__cta-container">
                        <Button type="filled" text="Get Started" />
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
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  
                                image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                                title="Python: From Start to Finish, All You Need to Know"
                                creator="Jack Ma"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  
                                image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                                title="Learn Graphic Design With an Award-Winning Designer"
                                creator="Sklolo Harba"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  
                                image="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
                                title="Economics: Historical Moments that Shaped the World"
                                creator="Hankash Hankosh"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  
                                image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                                title="Python: From Start to Finish, All You Need to Know"
                                creator="Jack Ma"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  
                                image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                                title="Learn Graphic Design With an Award-Winning Designer"
                                creator="Sklolo Harba"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  
                                image="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
                                title="Economics: Historical Moments that Shaped the World"
                                creator="Hankash Hankosh"
                            />
                        </Card>
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

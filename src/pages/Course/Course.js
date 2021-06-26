import React from 'react'
import Button from '../../components/Button'
import InfoCol from '../../components/InfoCol'
import RatingCard from '../../components/RatingCard'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import './course.css'
const Course = (thumsb) => {
    return (
        <div className="course">
            <header className="course__header">
                <div className="course__bg-overlay">

                </div>
                <div className="course__title">
                    <h2>Become a Data Scientist</h2>
                </div>
                <div className="course__teacher">
                    <h4><span className="span--normal">By </span>Jeff Hammerbacher</h4>
                </div>
                <div className="course__desc">
                    <p>
                    Gain real-world data science experience with projects designed by industry experts.
                    Build your portfolio and advance your data science career.
                    </p>
                </div>
                <div className="course__cta">
                    <Button width="250px" text="Enroll Now"/>
                </div>
                <div className="course__play-vid">
                    <PlayCircleFilledIcon style={{fontSize: "4rem", cursor: "pointer"}}/>
                </div>
            </header>
            <main className="course__details align">
                <div className="course__info">
                    <InfoCol title="Estimated Time" info="6 Months" ext="At 15 hrs/week"/>
                    <InfoCol title="Skill Level" info="6 Months" ext="At 15 hrs/week"/>
                    <InfoCol title="Prereuisites" info="6 Months" ext="At 15 hrs/week"/>
                    <InfoCol title="Language" info="6 Months" ext="At 15 hrs/week"/>
                </div>
                <div className="course__chapters">
                    <div className="section-title">
                        <h3 className="title-color">What You'll Learn</h3>
                    </div>
                    <div>
                        <ul className="chapters__list">
                            <li className="chapters__chapter">
                                <h5>Solving Data Science Problems</h5>
                                <p>Learn the data science process, including how to build effective data visualizations, and
how to communicate with various stakeholders.</p>
                            </li>
                            <li className="chapters__chapter">
                                <h5>Solving Data Science Problems</h5>
                                <p>
                                    Learn the data science process, including how to build effective data visualizations, and
                                    how to communicate with various stakeholders.
                                </p>
                            </li>
                            <li className="chapters__chapter">
                                <h5>Solving Data Science Problems</h5>
                                <p>Learn the data science process, including how to build effective data visualizations, and
how to communicate with various stakeholders.</p>
                            </li>
                            <li className="chapters__chapter">
                                <h5>Solving Data Science Problems</h5>
                                <p>Learn the data science process, including how to build effective data visualizations, and
how to communicate with various stakeholders.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="course__ratings">
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
                <div className="course__inv">
                    <div className="course__inv-title">
                        <h3>Become a Data Scientist</h3>
                        <p>Enroll today, and start putting your skills to work!</p>
                    </div>
                    <div className="course__inv-cta">
                        <Button width="15rem" text="Enroll Now"/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Course

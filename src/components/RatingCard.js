import React from 'react'
import Card from '../components/Card'
import Rating from '../components/Rating'
import Img from '../assets/img/user.jpg'
import '../assets/css/ratingCard.css'
const RatingCard = () => {
    return (
        <Card width="100%">
            <div className="rating-card">
                <div className="rating-card__title">
                    <div className="rating-card__avatar">
                        <img src={Img} alt=""/>
                    </div>
                    <div className="rating-card__info">
                        <div className="rating-card__uname">
                            <p>Grandizer Harba</p>
                        </div>
                        <div className="rating-card__rating">
                            <Rating color="var(--white)"/>
                        </div>
                    </div>
                </div>
                <div className="course-card__comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquam, magnam nobis laudantium sunt quod nemo est eaque blanditiis doloremque soluta reiciendis deleniti reprehenderit sapiente nesciunt dolor exercitationem hic harum....</p>
                </div>
            </div>
        </Card>
    )
}

export default RatingCard

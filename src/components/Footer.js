import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import '../assets/css/footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer__content align">
                <div className="footer__contacts">
                    <h4>Want Help?</h4>
                    <div className="footer__contact-block">
                        <p>Contact Us on:</p>
                        <p className="bold">support@educademy.com</p>
                    </div>
                    <div className="footer__block">
                        <p>Social Media:</p>
                        <div className="footer__social-links">
                            <a className="social-icon" href="https://www.facebook.com/profile.php?id=100009588068760">
                                <FacebookIcon style={ {fontSize: 36}}/>
                            </a>
                            <a className="social-icon" href="https://www.facebook.com/profile.php?id=100009588068760">
                                <InstagramIcon className="social-icon" style={ {fontSize: 36}}/>
                            </a>
                            <a className="social-icon" href="https://www.facebook.com/profile.php?id=100009588068760">
                                <TwitterIcon className="social-icon" style={{ fontSize: 36 }} />
                            </a>
                        </div>
                    </div>
                    
                </div>
                
                <div className="footer__hot-skills">
                    <h4>Hot Skills</h4>
                    <div className="footer__block">
                        <p>Front-End Web Development</p>
                    </div>
                    <div className="footer__block">
                        <p>Graphic Design</p>
                    </div>
                    <div className="footer__block">
                        <p>UI/UX Design</p>
                    </div>
                    <div className="footer__block">
                        <p>Videography</p>
                    </div>
                </div>
                <div className="footer__popular-topics">
                    <h4>Popular Topics</h4>
                    <div className="footer__block">
                        <p>How to Start a Freelance Carrer</p>
                    </div>
                    <div className="footer__block">
                        <p>What Soft Skills You Need at Work</p>
                    </div>
                    <div className="footer__block">
                        <p>Everything You Need to Pass a Work Interview</p>
                    </div>
                    <div className="footer__block">
                        <p>3 Steps to Take Before Starting a New Bussiness</p>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>All rights reserved @Educademy 2020-2021</p>
            </div>
        </footer>
    )
}

export default Footer

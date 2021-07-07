// react imports
import {React, useContext, useState, useEffect} from 'react'
import { Link, Route, Switch } from 'react-router-dom'

// components imports
import Searchbar from './Searchbar'
// contexts
import UserContext from '../contexts/UserContext'
import LessonTitleContext from '../contexts/LessonTitleContext'
// assets imports
import '../assets/css/navbar.css'
import logo from '../assets/img/logo.svg'
const Navbar = () => {
    const {user} = useContext(UserContext)
    const {lessonTitle} = useContext(LessonTitleContext)
    const [lessonLoad, setLessonLoad] = useState(true)
    useEffect(() => {
        if(!(typeof(lessonTitle) === "undefined")){
            setLessonLoad(false)
        }
    }, [lessonTitle])
    return (
        <div className="navbar">
            <div className="navbar__logo-container">
                <Link className="navbar__logo-container" to="/">
                    <img className="navbar__logo" src={ logo } alt="educademy logo" />
                    <h5 className="navbar__name-logo special-heading">EDUCADMEY</h5>
                </Link>
            </div>
            <Switch>
                <Route path="/course/:cid/lesson/:lid" exact>
                    <div class="nav__lesson-title">
                        <h5>Lesson: {lessonLoad ? "Loading..." : lessonTitle.substr(0, 50)}</h5>
                    </div>
                </Route>
                <Route path="/">
                    <Searchbar />
                </Route>
            </Switch>
            <Link className="navbar__link" to="/">{user.signed ? null : "Home"}</Link>
            <Link className="navbar__link" to="/plans">Plans</Link>
            <Link className="navbar__link" to="/catalog">Catalog</Link>
            {user.signed ? 
            <Link className="nav-link--outlined" to="/">{user.fname + " " + user.lname}</Link> :
            <Link className="nav-link--outlined" to="/registeration/sign-in">Sign In</Link>
            }
        </div>
    )
}

export default Navbar

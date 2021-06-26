// react imports
import {React, useContext} from 'react'
import { Link } from 'react-router-dom'

// components imports
import Searchbar from './Searchbar'
// contexts
import UserContext from '../contexts/UserContext'
// assets imports
import '../assets/css/navbar.css'
import logo from '../assets/img/logo.svg'
const Navbar = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <div className="navbar">
            <div className="navbar__logo-container">
                <Link className="navbar__logo-container" to="/">
                    <img className="navbar__logo" src={ logo } alt="educademy logo" />
                    <h5 className="navbar__name-logo special-heading">EDUCADMEY</h5>
                </Link>
            </div>
            <Searchbar />
            <Link className="navbar__link" to="/">Home</Link>
            <Link className="navbar__link" to="/plans">Plans</Link>
            <Link className="navbar__link" to="/catalog">Catalog</Link>
            {user.signed ? 
            <Link className="nav-link--outlined" to="/">{user.fname + " " + user.lname}</Link> :
            <Link className="nav-link--outlined" to="registeration/sign-in">Sign In</Link>
            }
        </div>
    )
}

export default Navbar

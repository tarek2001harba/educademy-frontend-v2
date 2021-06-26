import React from 'react'
import '../assets/css/searchbar.css'
// material ui imports
import SearchIcon from '@material-ui/icons/Search'
const Searchbar = () => {
    return (
        <div className="scb">
            <form action="">
                <input className="scb__sc-box border--left" type="text" placeholder="Search for a skill you like to learn"/>
                <button className="scb__sc-btn border--right" type="submit">
                    <SearchIcon />
                </button>
            </form>
        </div>
    )
}

export default Searchbar

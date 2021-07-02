import React from 'react'
import loader from '../assets/img/icons/loader.svg'
import '../assets/css/loading.css'
const Loading = () => {
    return (
        <div className="loading">
            <img src={loader} alt="loading icon"/>
        </div>
    )
}

export default Loading

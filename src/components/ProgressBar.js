import React from 'react'
import '../assets/css/progressBar.css'
const ProgressBar = ({ prog }) => {
    return (
        <div className="pbar">
            <progress value={prog} max="100" />
            <span className="span--bold">{ prog }%</span>
        </div>
    )
}

export default ProgressBar

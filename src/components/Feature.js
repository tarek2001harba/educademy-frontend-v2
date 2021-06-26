import React from 'react'
import '../assets/css/feature.css'
const Feature = ({ image, title, desc, dir, bg, textColor }) => {
    return (
        <div>
            <section className="feature" style={{background: bg, flexDirection: dir === "rev" ? "row-reverse" : "row"}}>
                <div className="feature__img">
                    <img src={ image } alt=""/>
                </div>
                <div className="feature__content">
                    <h2 className={`feature__title special-heading ${bg ==="var(--white)" ? "title--white" : ""}`}>{title}</h2>
                    <h5 className="feature__desc" style={{color: textColor}}>{desc}</h5>
                </div>
            </section>
        </div>
    )
}
Feature.defaultProps = {
    dir: "normal",
    bg: "var(--black)"
}
export default Feature

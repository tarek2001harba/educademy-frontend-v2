import React, {useEffect} from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

// css imports
import './scrollarrows.css'
const ScrollArrows = (props) => {
    // component logic
    let prevScrollPos = null
    let target = null
    let targetWidth = null
    let subElementNum = null
    const initArrows = () => {
        target = document.querySelector(".scroll-arrows__content")
        targetWidth = target.scrollWidth
        subElementNum = document.querySelectorAll('.scroll-arrows__content .' + props.sElem).length
        // document.querySelector(".arrow--right").classList.add("hover")
        // document.querySelector(".arrow--left").classList.add("hover")
        // testScroll("left")
    }
    useEffect(initArrows)
    const scrollLeft = () => {
        // testScroll("left")
        prevScrollPos = target.scrollLeft
        target.scroll(prevScrollPos - (targetWidth / subElementNum) * 2, 0)
    }
    const scrollRight = () => {
        // testScroll("right")
        prevScrollPos = target.scrollLeft
        target.scroll(prevScrollPos + (targetWidth / subElementNum) * 2, 0)
    }
    // const testScroll = (e) => {
    //     const arrow = e.target
    //     if (target.scrollLeft === 0 || target.scrollLeft === targetWidth) {
    //         arrow.style.opacity = "0.5"
    //         arrow.style.cursor = "not-allowed"
    //         arrow.style.pointerEvents = "none"
    //         arrow.classList.remove("hover")
    //     }
    //     else if(!arrow.classList.contains("hover")){
    //         arrow.classList.add("hover")
    //     }
    // }

    // component jsx
    return (
        <div className="scroll-arrows">
            <div className="scroll-arrows__content">
                {props.children}
            </div>
            <div className="scroll-arrows__container">
                <div className="scroll-arrows__arrow-container">
                    <div className="scroll-arrows__arrow arrow--left" style={{background: props.bg}}>
                        <ChevronLeftIcon onClick={ scrollLeft } style={{fontSize: props.size, color: props.color}} />
                    </div>
                </div>
                <div className="scroll-arrows__arrow-container">
                    <div className="scroll-arrows__arrow arrow--right" style={{background: props.bg}}>
                        <ChevronRightIcon onClick={ scrollRight } style={{fontSize: props.size, color: props.color}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
ScrollArrows.defaultProps = {
    color: "var(--accentColor)",
    bg: "var(--darkGrey)",
    size: "72px"
}
export default ScrollArrows

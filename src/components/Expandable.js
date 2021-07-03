import React, {useRef, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../assets/css/expandable.css'
const Expandable = ({title, desc, expand, pageId}) => {
    const extra = useRef()
    const [ expanded, setExpanded ] = useState(false)
    useEffect(() => {
        gsap.set(extra.current, {
            maxHeight : 0
        })
        document.addEventListener('click', () => {
            if(expanded){
                gsap.to(extra.current, {
                    duration: 2,
                    maxHeight : 0
                })
                setExpanded(false)
            }
            else{
                gsap.to(extra.current, {
                    duration: 2,
                    maxHeight : "fit-content"
                })
                setExpanded(true)
            }
        })
    }, [])
    return (
        <div className="expandable">
            <h5>{title}</h5>
            <p>{desc}</p>
            <div className="expand" ref={extra}>
                <ul>
                    {expand.map(exp => (
                        <li>
                            <Link to={pageId+"/lessson/"+exp.lesson_id}>
                                <h5>{exp.title}</h5>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Expandable

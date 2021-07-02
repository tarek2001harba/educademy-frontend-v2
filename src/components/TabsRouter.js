import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/tabsrouter.css'

const TabsRouter = ({ sections }) => {
    const [currentSect, setCurrentSect] = useState(sections[0])
    const defSectStyle = { 
        borderBottom: "2px solid var(--accentColor)",
        color: "var(--accentColor)"
    }
    const handleSectClick = (e) => {
        document.querySelectorAll(".tabs-router__section").forEach(section => {
            section.style.color = "var(--white)"
            section.style.borderBottom = "2px solid #ffffff00"
        })
        e.target.style.borderBottom = "2px solid var(--accentColor)"
        e.target.style.color = "var(--accentColor)"
        setCurrentSect(e.target.textContent)
    }
    return (
        <div className="tabs-router">
            <span className="tabs-router__current-section" ></span>
            {
                sections.map((sect, i) =>
                    (i === 0 ?
                    <Link className="tabs-router__section"
                        style={defSectStyle}
                        key={sect}
                        onClick={handleSectClick}
                        to={sect.toLowerCase().replace(/\s/g, "-")}>{sect}</Link> :
                    <Link className="tabs-router__section"
                        key={sect} onClick={handleSectClick}
                        to={sect.toLowerCase().replace(/\s/g, "-")}>{sect}</Link>
                    )
                )
            }
        </div>
    )
}

export default TabsRouter

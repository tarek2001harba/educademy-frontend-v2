import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/pagination.css'

const Pagination = ({ sections }) => {
    const [currentSect, setCurrentSect] = useState(sections[0])
    const defSectStyle = { 
        borderBottom: "2px solid var(--accentColor)",
        color: "var(--accentColor)"
    }
    const handleSectClick = (e) => {
        document.querySelectorAll(".pagination__section").forEach(section => {
            section.style.color = "var(--white)"
            section.style.borderBottom = "2px solid #ffffff00"
        })
        e.target.style.borderBottom = "2px solid var(--accentColor)"
        e.target.style.color = "var(--accentColor)"
        setCurrentSect(e.target.textContent)
    }
    return (
        <div className="pagination">
            <span className="pagination__current-section" ></span>
            {
                sections.map((sect, i) =>
                    (i === 0 ?
                    <Link className="pagination__section"
                        style={defSectStyle}
                        key={sect}
                        onClick={handleSectClick}
                        to={sect.toLowerCase().replace(/\s/g, "-")}>{sect}</Link> :
                    <Link className="pagination__section"
                        key={sect} onClick={handleSectClick}
                        to={sect.toLowerCase().replace(/\s/g, "-")}>{sect}</Link>
                    )
                )
            }
        </div>
    )
}

export default Pagination

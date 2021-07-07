import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import '../assets/css/chaptersaccordion.css'
const ChaptersAccordion = ({chapters, courseId}) => {
    const accordionStyle = {
        color: 'var(--white)',
        backgroundColor: 'var(--darkGrey)'
    }
    return (
        <div className="expandable">
            {chapters.map(chapter => (
                <Accordion style={accordionStyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color : 'var(--white)'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="expandable__title">
                            <div className="expandable__info">
                                <h5>{chapter.title}</h5>
                                <p>{chapter.description}</p>
                            </div>
                        </div>
                    </AccordionSummary>
                        <AccordionDetails>
                            <div className="expand">
                                <ul>    
                                {chapter.lessons.map(lesson => (
                                    <li>
                                        <Link to={courseId+"/lesson/"+lesson.lesson_id}>
                                            <h5>{lesson.title}</h5>
                                        </Link>
                                    </li>
                                ))}
                                </ul>
                            </div>
                        </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default ChaptersAccordion

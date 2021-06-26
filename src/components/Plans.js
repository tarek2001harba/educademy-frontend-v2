import React from 'react'
import Plan from '../components/Plan'
import Card from '../components/Card'
import '../assets/css/plans.css'
const Plans = () => {
    const borderStyle = ".25rem solid var(--darkGrey)"
    return (
        <div className="plans-container">
            <Card width="350px" height="350px" bg="transparent" border={borderStyle}>
                <Plan title="Basic" cost="2,99" features={ ["Access to 1 course per month"] }/>
            </Card>
            <Card width="350px" height="350px" >
                <Plan title="Premium" cost="10,99" features={ ["Unlimited access to courses"] } main={ true }/>
            </Card>
            <Card width="350px" height="350px" bg="transparent" border={borderStyle}>
                <Plan title="Pro" cost="6.99" features={["Access to 2 course per month"]}/>
            </Card>
            
        </div>
    )
}

export default Plans

import React from 'react'
import Button from '../components/Button'
import '../assets/css/plan.css'
const Plan = ({ title, cost, features, main }) => {
    return (
        <div className="plan" style={{borderTop: main ?  ".33rem solid var(--accentColor)" : "none"}}>
            <div className="plan__title">
                <h3 >{title}</h3>
                <h5>$ { cost }<span className="span--normal">/mo</span></h5>
            </div>
            <div className="plan__features">
                <ul>
                    {features.map((feature, ind) => (
                        <li className="plan__feature" key={ feature + "-" + ind}>{ feature }</li>
                    ))}
                </ul>
            </div>
            <div className="plan__cta">
                <ul>
                    <Button type={ main ? "filled" : "outlined"} width="100%" text="Start Today" />
                </ul>
            </div>
        </div>
    )
}

export default Plan

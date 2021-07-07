import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import axios from 'axios'
import '../assets/css/plan.css'
const Plan = ({ subId, title, cost, features, main , purchased}) => {
    const { user } = useContext(UserContext)
    const [ response, setResponse ] = useState(null)
    const sub = () => {
        const send = {sid : user.sid, sub_id : subId};
        axios.post('/make.php', send).then(res => {
            setResponse(res.response)
            console.log(res)
        }).catch(err => console.log(err))
    }

    const cancel = () => {
        axios.post('/cancel.php', {sid : user.sid}).then(res => {
            setResponse(res.response)
            console.log(res)
        }).catch(err => console.log(err))
    }
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
                {user.signed ? (purchased === true ? 
                <Button type="cancel" width="100%" handleClick={cancel} text="Cancel" /> :
                purchased === false ?
                <Button type="outlined" width="100%" text="Already Subscribed to a Plan" dis={true}/> :
                <Button type={ main ? "filled" : "outlined"} 
                        width="100%" handleClick={sub} 
                        text={user.type === 'Student' ? "Subscribe" : "Teachers Can Not Purchase"} 
                        dis={user.type === 'Student' ? false : true}/>) :
                <Link to="/registeration/sign-in"><Button width="100%" text="Sign in to Subscribe"/></Link>
                }
            </div>
        </div>
    )
}

export default Plan

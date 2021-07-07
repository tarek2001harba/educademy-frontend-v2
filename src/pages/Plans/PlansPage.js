import React, {useEffect, useContext} from 'react'
import Plans from '../../components/Plans'
import './plansPage.css'
import axios from 'axios'
import UserContext from '../../contexts/UserContext'
import SubscribedContext from '../../contexts/SubscribedContext'
const PlansPage = () => {
    const { user } = useContext(UserContext)
    const {subscribed, setSubscribed} = useContext(SubscribedContext)
    axios.defaults.baseURL = 'https://localhost/educademy/api/purchase'
    useEffect(() => {
        axios.post('/purchase/check.php', {sid : user.sid}).then(res => {
            setSubscribed(res.data.subscribed)
        }).catch(err => console.log(err))
    }, []);
    return (
        <div className="plans-page align">
            <h3 className="title-color special-heading">Start Today, and Become a<br/>Part of The Future!</h3>
            <Plans />
        </div>
    )
}

export default PlansPage

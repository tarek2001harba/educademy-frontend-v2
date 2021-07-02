import React, { useState, useEffect, useContext } from 'react'
import Plan from '../components/Plan'
import Card from '../components/Card'
import Loading from './Loading'
import UserContext from '../contexts/UserContext'
import '../assets/css/plans.css'
import axios from 'axios'

const Plans = () => {
    const { user } = useContext(UserContext)
    const [ loading, setLoading ] = useState(true)
    const borderStyle = ".25rem solid var(--darkGrey)"
    const [ plans, setPlans ] = useState({title:'', courses_num:0, price:0});
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    useEffect(() => {
        axios.post('/subscription/getAll.php', user.signed ? {sid : user.sid} : {}).then(res => {
            setPlans(res.data)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])
    
    return loading ? (<Loading />) : (
        <div className="plans-container">
            <Card width="350px" height="350px" bg="transparent" border={borderStyle}>
                <Plan subId={plans[0].id}title={plans[0].title} cost={plans[0].price} features={ [ "Access to " + plans[0].courses_num + " courses per year"] } purchased={plans[0].purchased} />
            </Card>
            <Card width="350px" height="350px" >
                <Plan subId={plans[2].id}title={plans[2].title} cost={plans[2].price} features={ [ "Access to " + plans[2].courses_num + " courses per year"] } main={true} purchased={plans[2].purchased} />
            </Card>
            <Card width="350px" height="350px" bg="transparent" border={borderStyle}>
                <Plan subId={plans[1].id}title={plans[1].title} cost={plans[1].price} features={ [ "Access to " + plans[1].courses_num + " courses per year"] } purchased={plans[1].purchased} />
            </Card>
        </div>
    )
}

export default Plans

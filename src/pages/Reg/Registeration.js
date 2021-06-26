import {React, useState, useContext} from 'react'
import Button from '../../components/Button'
import { Switch, Route, Redirect, Link } from 'react-router-dom'

//componenets
import Pagination from '../../components/Pagination'
import Field from '../../components/Field'
// contexts
import UserContext from '../../contexts/UserContext'
// backend
import axios from 'axios'

//css
import './reg.css'
const Registeration = () => {
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    const [signStatus, setSignStatus] = useState(false);
    const {user, setUser} = useContext(UserContext)
    const signup = async () => {
        const fname = document.querySelector('#signup-fname');
        const lname = document.querySelector('#signup-lname');
        const gender = document.querySelector('#signup-gender');
        const bdate = document.querySelector('#signup-bdate');
        const country = document.querySelector('#signup-country');
        const about = document.querySelector('#signup-about');
        const spec = document.querySelector('#signup-spec');
        const type = document.querySelector('#signup-type');
        const phone = document.querySelector('#signup-phone');
        const email = document.querySelector('#signup-email');
        const password = document.querySelector('#signup-pwd');
        const userSign = {
            fname : fname.value,
            lname : lname.value,
            gender : gender.options[gender.selectedIndex].text,
            bdate : bdate.value,
            country : country.value,
            about : about.value,
            spec : spec.value,
            type : type.options[type.selectedIndex].text,
            phone : phone.value,
            email : email.value,
            password : password.value
        }
        axios.post('/user/create.php', userSign).then(res => {
            console.log(res)
            userSign.uid = parseInt(res.data.uid)
            userSign.tid = parseInt(res.data.tid)
            userSign.signed = true
            setUser(userSign)
            // setSignStatus(true)
        }).catch( err => {
            
            console.log(err)
            // setSignStatus(false)
        })
    }
    const signin = () => {
        const email = document.querySelector("#sigin-email")
        const pwd = document.querySelector("#sigin-pwd")
        const userIn = {
            email : email.value,
            password: pwd.value
        }
        axios.post('/user/signin.php', userIn).then(res => {
            console.log(res)
            userIn.uid = parseInt(res.data.uid)
            userIn.tid = parseInt(res.data.tid)
            userIn.fname = parseInt(res.data.fname)
            userIn.lname = parseInt(res.data.lname)
            userIn.gender = parseInt(res.data.gender)
            userIn.bdate = parseInt(res.data.bdate)
            userIn.country = parseInt(res.data.country)
            userIn.about = parseInt(res.data.about)
            userIn.spec = parseInt(res.data.spec)
            userIn.type = parseInt(res.data.type)
            userIn.phone = parseInt(res.data.phone)
            userIn.email = parseInt(res.data.email)
            userIn.signed = true
            console.log(userIn)
            setUser(userIn)
            // setSignStatus(true)
        }).catch(err => {
            setSignStatus(false)
        })
    }
    return (
        <div className="reg">
            {signStatus ? (
            <Route path="/">
                <Redirect to="/registeration/sign-up/success" exact/>
                <div className="reg__success" action="">
                    <h4>Welcome to Educademy. Your journey of learning starts today!</h4>
                    <h5>Choose a <Link to="/plans">plan</Link> to get up and running.</h5>
                </div>
            </Route>) : 
            <div className="reg__pagination-container">
                <Pagination sections={["Sign In", "Sign Up"]}/>
            </div>}
            <Switch>
                <Route path="/registeration/sign-in" exact>
                    <div className="reg__form" action="">
                        <h4 className="reg__title">Sign In</h4>
                        <Field id="sigin-email" fieldName="E-mail" />
                        <Field id="sigin-pwd" fieldName="Password" last={true}/>                        
                        <Button type="filled" width="100%" text="Sign In" onClick={signin}/>
                    </div>
                </Route>
                <Route path="/registeration/sign-up" exact>
                    <div className="reg__form" action="">
                        <h4 className="reg__title">Sign Up</h4>
                        <Field id="signup-fname" fieldName="First Name" />
                        <Field id="signup-lname" fieldName="Last Name" />
                        <Field id="signup-gender" fieldName="Gender" fieldType="select" options={["Male", "Female"]}/>
                        <Field id="signup-bdate" fieldName="Birth Date" fieldType="date"/>
                        <Field id="signup-country" fieldName="Country" />
                        <Field id="signup-about" fieldName="About" fieldType="textarea"/>
                        <Field id="signup-spec" fieldName="Specialization/Study Field" />
                        <Field id="signup-type" fieldName="Account Type" fieldType="select" options={["Teacher", "Student"]} last={true}/>
                        <Field id="signup-phone" fieldName="Phone Number" />
                        <Field id="signup-email" fieldName="E-mail" />
                        <Field id="signup-pwd" fieldName="Password" />
                        <Button type="filled" width="100%" text="Sign Up" onClick={signup}/>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Registeration

import {React, useState, useContext} from 'react'
import Button from '../../components/Button'
import { Switch, Route, Redirect, Link } from 'react-router-dom'

//componenets
import TabsRouter from '../../components/TabsRouter'
import Field from '../../components/Field'
// contexts
import UserContext from '../../contexts/UserContext'
// backend
import axios from 'axios'
//css
import './reg.css'
const Registeration = () => {
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    const [signUpStatus, setSignUpStatus] = useState(null);
    const [signInStatus, setSignInStatus] = useState(null);
    const {user, setUser} = useContext(UserContext)
    const signup = () => {
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
        const fnameErr = fname.parentElement.children[2]
        const lnameErr = lname.parentElement.children[2]
        const bdateErr = bdate.parentElement.children[2]
        const countryErr = country.parentElement.children[2]
        const aboutErr = about.parentElement.children[2]
        const specErr = spec.parentElement.children[2]
        const phoneErr = phone.parentElement.children[2]
        const emailErr = email.parentElement.children[2]
        const pwdErr = password.parentElement.children[2]
        fnameErr.textContent = fnameErr.value === "" ? "First name can not be empty" : ""
        lnameErr.textContent = lname.value === "" ? "Last name can not be empty" : ""
        bdateErr.textContent = bdate.value === "" ? "Birth date can not be empty" : ""
        countryErr.textContent = country.value === "" ? "Country can not be empty" : ""
        specErr.textContent = country.value === "" ? "Spceialization can not be empty" : ""
        aboutErr.textContent = about.value === "" ? "About can not be empty" : ""
        phoneErr.textContent = phone.value === "" ? "Phone can not be empty" : ""
        emailErr.textContent = email.value === "" ? "Email can not be empty" : ""
        pwdErr.textContent = password.value === "" ? "Password can not be empty" : ""
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
        if(fname.value !== "" && lname.value !== "" && bdate.value !== "" &&
        country.value !== "" && about.value !== "" && spec.value !== "" &&
        phone.value !== "" && email.value !== "" && password.value !== ""){
            axios.post('/user/create.php', userSign).then(res => {
                userSign.uid = parseInt(res.data.uid)
                if(userSign.type === "Teacher"){
                    userSign.tid = parseInt(res.data.tid)
                } else{
                    userSign.sid = parseInt(res.data.sid)
                }
                userSign["join_date"] = res.data["join_date"]
                userSign.signed = true
                if(res.request.status === 201){
                    setUser(userSign)
                    setSignUpStatus(true)
                } else{
                    setSignUpStatus(false)
                }
                console.log(res)
            }).catch( err => {
                console.log(err)
                setSignUpStatus(false)
            })
        }
    }
    const signin = () => {
        const email = document.querySelector("#sigin-email")
        const pwd = document.querySelector("#sigin-pwd")
        const emailErr = email.parentElement.children[2]
        const pwdErr = pwd.parentElement.children[2]
        emailErr.textContent = email.value === "" ? "Email can not be empty" : ""
        pwdErr.textContent = pwd.value === "" ? "Password can not be empty" : ""

        const userIn = {
            email : email.value,
            password: pwd.value
        }
        if(email.value !== "" && pwdErr.value !== ""){
            axios.post('/user/signin.php', userIn).then(res => {
                console.log(res)
                if(res.request.status === 200){
                    userIn.uid = parseInt(res.data.uid)
                    if(res.data.type === "Teacher"){
                        userIn.tid = parseInt(res.data.tid)
                    } else{
                        userIn.sid = parseInt(res.data.sid)
                    }
                    userIn.fname = res.data.fname
                    userIn.lname = res.data.lname
                    userIn.gender = res.data.gender
                    userIn.bdate = res.data.bdate
                    userIn.country = res.data.country
                    userIn.about = res.data.about
                    userIn.spec = res.data.spec
                    userIn.type = res.data.type
                    userIn.phone = res.data.phone
                    userIn.email = res.data.email
                    userIn["join_date"] = res.data["join_date"]
                    userIn.signed = true
                    setUser(userIn)
                    setSignInStatus(true)
                    console.log(res)
                } else{
                    setSignInStatus(false)
                }
            }).catch(err => {
                setSignInStatus(false)
            })
        }
    }
    return (
        <div className="reg">
            {signUpStatus ? (
            <Route path="/">
                <div className="reg__success" action="">
                    <Redirect to="/registeration/sign-up/success" exact/>
                    <h4>Welcome to Educademy. Your journey of learning starts today!</h4>
                    <h5>Choose a <Link to="/plans">plan</Link> to get up and running.</h5>
                </div>
            </Route>) : signUpStatus === false ? (
            <Route path="/registeration/sign-up">
                <div className="reg__error" action="">
                    <p>Error while creating account.</p>
                </div>
            </Route>) : null}
            {signInStatus === true ? (
            <Route path="/">
                <div className="reg__success" action="">
                    <Redirect to="/registeration/sign-up/success" exact/>
                    <h4>Welcome Back!</h4>
                    <h5>Go to your <Link to="/">classroom</Link> and continue your journey of learning and improvement. </h5>
                </div>
            </Route>) : signInStatus === false ? (
                <Route path="/registeration/sign-in">
                    <div className="reg__error" action="">
                        <p>Error while logging in. Check if you are inserting the right information.</p>
                    </div>
                </Route>
            ) : null}
            <Switch>
                <Route path="/registeration/sign-in" exact>
                    <div className="reg__tabs-router-container">
                        <TabsRouter sections={["Sign In", "Sign Up"]}/>
                    </div>
                    <div className="reg__form" action="">
                        <h4 className="reg__title">Sign In</h4>
                        <Field id="sigin-email" fieldName="E-mail" />
                        <Field id="sigin-pwd" fieldName="Password" last={true}/>                        
                        <Button type="filled" width="100%" text="Sign In" handleClick={signin}/>
                    </div>
                </Route>
                <Route path="/registeration/sign-up" exact>
                    <div className="reg__tabs-router-container">
                        <TabsRouter sections={["Sign In", "Sign Up"]}/>
                    </div>
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
                        <Button type="filled" width="100%" text="Sign Up" handleClick={signup}/>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default Registeration

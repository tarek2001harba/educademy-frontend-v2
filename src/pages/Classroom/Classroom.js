import {React, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
// components
import Card from '../../components/Card'
import ClassCourse from '../../components/ClassCourse'
import InfoField from '../../components/InfoField'
import Button from '../../components/Button'
import axios from 'axios'
// contexts
import UserContext from '../../contexts/UserContext'
// img
import userImg from '../../assets/img/tarek.jpg'
import './classroom.css'
import Message from '../../components/Message'
const Classroom = () => {
    const {user, setUser} = useContext(UserContext)
    const [ classCourses, setClassCourses ] = useState([])
    const uname = user.fname + " " + user.lname
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    useEffect(() => {
        if(user.type === 'Student'){
            axios.post('/registeration/getClassroom.php', {sid : user.sid}).then( res => {
                console.log(res)
                setClassCourses(res.data)
            })
        }
    }, [])
    const signOut = () => {
        setUser({signed:false})
    }

    const UserInfo = (
        <div className="classroom__uinfo">
            <div className="uinfo__user">
                <div className="uinfo__pic">
                    <img src={userImg} alt={uname + "'s profile picture"}/>
                </div>
                <div className="uinfo__info">
                    <InfoField fieldName="Full Name" info={uname} />
                    <InfoField fieldName="Email" info={user.email} />
                    <InfoField fieldName="Phone" info={user.phone} />
                    <InfoField fieldName="Account Type" info={user.type} />
                    <InfoField fieldName="Specialization" info={user.spec} />
                    <InfoField fieldName="Country" info={user.country} />
                    <InfoField fieldName="Gender" info={user.gender} />
                    <InfoField fieldName="Birth Date" info={user.bdate} />
                    <InfoField fieldName="Join Date" info={user["join_date"]} />
                </div>
            </div>
            <div className="uinfo__action">
                    <Button type="outlined" text="Sign Out" size="big" handleClick={signOut}/>
                </div>
        </div>
    )

    const addCourseAction = (
        <span className="classroom__add-course">
            <Link to="/add-course"><Button type="filled" text="Add Course" size="big"/></Link>
        </span>
    )
    return (
        <div className="classroom align">
            {UserInfo}
            <div className="classroom__courses-cont">
                <div className="section-title">
                    <h3 className="title-color">My Courses</h3>
                    {user.type === "Teacher" ? addCourseAction : null}
                </div>
                <div className="classroom__courses">
                    {classCourses.length === 0 ? 
                    <Message type="error" message="You are not enrolled in any courses" />
                    : classCourses.map(course => (
                        <Card width="100%" height="100%">
                            <ClassCourse enrolled={true}
                                cid={course.cid}
                                image={course.thumb}
                                title={course.title}
                                creator={course.teacher}
                                chapter="Logo Design Principles"
                                lesson="Negative Space"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Classroom

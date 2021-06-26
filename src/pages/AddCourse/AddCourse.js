import {React, useState, useContext} from 'react'
//components
import Field from '../../components/Field'
import Button from '../../components/Button'
import InfoItem from '../../components/InfoItem'
//material ui
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
//contexts
import UserContext from '../../contexts/UserContext'
//css
import './addcourse.css'

const AddCourse = () => {
    const {user, setUser} = useContext(UserContext)
    console.log(user)
    const [courseInfo, setCourseInfo] = useState({
        "title" : "",
        "description" : "",
        "Language" : "",
        "Level" : "",
        "category" : "",
        "period" : 0
    });
    const [chapters, setChapters] = useState([]);
    const [lessons, setLessons] = useState([]);
    const addChapter = () =>{
        const chapterTitle = document.querySelector("#chapter-title")
        const chapterDesc = document.querySelector("#chapter-desc")
        setChapters(prevChapters => [...prevChapters, {
                "title" : chapterTitle.value,
                "description" : chapterDesc.value
            }]
        )
        // chapterTitle.value = ""
        // chapterDesc.value = ""
    }
    const addLesson = () => {
        const lessonTitle = document.querySelector("#lesson-title")
        const lessonVideo = document.querySelector("#lesson-video")
        const lessonContent = document.querySelector("#lesson-content")
        const chapterSelect =document.querySelector("#lesson-chapter")
        // console.log(document.querySelector("#lesson-title").value)
        // console.log(document.querySelector("#lesson-video").value)
        // console.log(chapterSelect.options[chapterSelect.selectedIndex].text)
        // console.log(document.querySelector("#lesson-content").value)
        setLessons(prevLessons => [...prevLessons, {
            "title" : lessonTitle.value,
            "videoLink" : lessonVideo.value,
            "chapter" : chapterSelect.options[chapterSelect.selectedIndex].text,
            "content" : lessonContent.value
            }]
        )
    }
    const submit = () =>{
        console.log("clicked")
        const langSelect = document.querySelector("#course-lang");
        const lvlSelect = document.querySelector("#course-lvl");
        const ctgSelect = document.querySelector("#course-ctg");
        setCourseInfo(
            {
                "title" : document.querySelector("#course-title").value,
                "description" : document.querySelector("#course-title").value,
                "language" : langSelect.options(langSelect.selectedIndex).text,
                "level" : lvlSelect.options(lvlSelect.selectedIndex).text,
                "category" : ctgSelect.options(ctgSelect.selectedIndex).text,
                "period" : document.querySelector("#course-period").value
            }
        )
    }
    return (
        <div className="add-course align">
            <div className="add-course__title">
                <h3>Add a Course</h3>
            </div>
            <div className="add-course__step">
              <p>Step 1: General Information</p>
            </div>
            <form className="add-course__form" action="">
                <Field id="course-title" fieldName="Title:"/>
                <Field id="course-desc" fieldName="Description:"/>
                <Field id="course-lang" fieldName="Language:" fieldType="select" options={["English", "German", "Arabic"]}/>
                <Field id="course-lvl" fieldName="Level:" fieldType="select" options={["Beginner", "Intermediate", "Advanced"]}/>
                <Field id="course-ctg" fieldName="Category:" fieldType="select" options={["Technology", "Arts", "Sciences"]}/>
                <Field id="course-period" fieldName="Esimated period in months:" />
            </form>
            <div className="add-course__step">
              <p>Step 2: Chapters</p>
            </div>
            <form className="add-course__form subpart-form" action="">
                <Field id="chapter-title" fieldName="Title"/>
                <Field id="chapter-desc" fieldName="Description"/>
                <div className="add-course__action">
                    <div className="add-course__action-icon">
                        <AddIcon fontSize="inherit" onClick={addChapter}/>
                    </div>
                </div>
                <div className="add-course__added-info">
                    {chapters.map(ch => (
                        <div key={ch} className="added-info__container">
                            <InfoItem fieldName="Title" info={ch.title}/>
                            <InfoItem fieldName="Description" info={ch.description}/>
                            <div className="added-info__action-container">
                                <div className="add-course__action-icon remove-icon">
                                    <RemoveIcon fontSize="inherit"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
            <div className="add-course__step">
              <p>Step 3: Lessons</p>
            </div>
            <form className="add-course__form subpart-form" action="">
                <Field id="lesson-title" fieldName="Title"/>
                <Field id="lesson-video" fieldName="Video Link (must be uploaded to Youtube)"/>
                <Field id="lesson-chapter" fieldName="Chapter" fieldType="select" options={chapters.map(ch => ch.title)}/>
                <Field id="lesson-content" fieldName="Readings/Written Content" fieldType="textarea"/>
                <div className="add-course__action">
                    <div className="add-course__action-icon">
                        <AddIcon fontSize="inherit" onClick={addLesson}/>
                    </div>
                </div>
                <div className="add-course__added-info">
                    {lessons.map(ls => (
                        <div key={ls} className="added-info__container">
                            <InfoItem fieldName="Title" info={ls.title}/>
                            <InfoItem fieldName="Video Link" info={ls.videoLink}/>
                            <InfoItem fieldName="Chapter" info={ls.chapter}/>
                            <InfoItem fieldName="Reading/Written Content" info={ls.content}/>
                            <div className="added-info__action-container">
                                <div className="add-course__action-icon remove-icon">
                                    <RemoveIcon fontSize="inherit"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
            <div className="add-course__action">
                    <div className="add-course__submit">
                        <Button type="filled" text="Submit for Review" size="big" onClick={submit}/>
                    </div>
                </div>
        </div>
    )
}

export default AddCourse

import {React, useContext, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
// react components
import CourseCard from '../../components/CourseCard'
import Card from '../../components/Card'
import ScrollArrows from '../../components/ScrollArrows/ScrollArrows'
import Filter from '../../components/Filter'
import Message from '../../components/Message'
import Pagination from '../../components/Pagination'
import Loading from '../../components/Loading'
// backend
import axios from 'axios'
import './catalog.css'

const Catalog = () => {
    const {user} = useContext(UserContext)
    const [trendCourses, setTrendCourses] = useState({'courses' : []})
    const [tcLoading, setTcLoading] = useState(true)
    const [allCourses, setAllCourses] = useState({'courses' : []})
    const [acLoading , setAcLoading] = useState(true) // loading status for all courses
    const [filters, setFilters] = useState(null)
    const [offset, setOffset] = useState(0)
    const [category, setCategory] = useState();
    const [level, setLevel] = useState();
    const [language, setLang] = useState();
    const [period, setPeriod] = useState();
    axios.defaults.baseURL = 'https://localhost/educademy/api'
    const [ctgs, setCtgs] = useState([]); // fetched categories
    const [levels, setLevels] = useState([]); // fethced levels
    // fetching categories
    useEffect(() => {
        axios.get('/category/get.php').then(res =>{
        setCtgs(res.data)
    }).catch(err => console.log(err))}, []);
    // fetching levels
    useEffect(() => {axios.get('/level/get.php').then(res =>{
        setLevels(res.data)
    }).catch(err => console.log(err))}, []);
    const handleCtgChange = () => {
        const ctgSelect = document.querySelector('#filter-ctg')
        if(ctgSelect.value !== " "){
            setCategory(ctgSelect.value)
        } else{
            setCategory()
        }
    }
    const handleLvlChange = () => {
        const lvlSelect = document.querySelector('#filter-lvl')
        if(lvlSelect.value !== " "){
            setLevel(lvlSelect.value)
        } else{
            setLevel()
        }
    }
    const handleLangChange = () => {
        const langSelect = document.querySelector('#filter-lang')
        if(langSelect.value !== " "){
            setLang(langSelect.value)
        } else{
            setLang()
        }
    }
    const handlePeriodChange = () => {
        const periodSelect = document.querySelector('#filter-period')
        if(periodSelect.value !== " "){
            setPeriod(periodSelect.value)
        } else{
            setPeriod()
        }
    }
    // change filter effect on change of its params
    useEffect(()=> {
        setOffset(0)
        setFilters({
            'level' : level,
            'category' : category,
            'language' : language,
            'period' : period
        })
    }, [category, level, language, period])
    // fetch all courses section
    useEffect(() => {
        axios.post('/course/getAll.php', {
                offset : offset*10,
                'filters' : filters
            }
        ).then(res => {
            console.log(res)
            setAllCourses(res.data)
            setAcLoading(false)
        }).catch(err => console.log(err))
    }, [filters, offset])

    // fetches trend section courses
    useEffect(() => {
        axios.post('/course/getAll.php', {
                offset : 0
        }).then(res => {
            setTrendCourses(res.data)
            setTcLoading(false)
        }).catch(err => console.log(err))
    }, [ offset ])

    const updateOffset = (e) => {
        setOffset(parseInt(e.target.textContent)-1)
    }
    return (
        <div className="catalog">
            <div className="catalog__trending align">
                <div className="trending__title"><h2 className="title-color special-heading">Trending Courses</h2></div>
                <div className="trending__content">
                    <ScrollArrows size="3.5rem" sElem="course-card">
                        {tcLoading ? (<Loading />) : trendCourses.courses.map(course => (
                            <Card width="500px" height="350px" marginRight="var(--cardMargin)" key={course['course_id']}>
                                <CourseCard 
                                    enrolled={false} section="home"
                                    cid={course.course_id}
                                    image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                                    title={course.title}
                                    creator={course.teacher}
                                    level={course.level}
                                    language={course.language}
                                    period={course.period}
                                    rate={course.rate}
                                    studentsNum={course.students_num}
                                    key={course.course_id}
                                />
                            </Card>
                        ))}
                    </ScrollArrows>
                </div>
            </div>
            <div className="catalog__courses align">
                <div className="courses__title"><h2 className="title-color special-heading">All Courses</h2></div>
                <div className="filters">
                    <Filter id="filter-ctg" name="Category" options={ctgs} onChange={handleCtgChange}/>
                    <Filter id="filter-lvl" name="Level" options={levels}  onChange={handleLvlChange}/>
                    <Filter id="filter-rating" name="Rating" options={["≤1", "≤2", "≤3", "≤4", "≤5"]}/>
                    <Filter id="filter-lang" name="Language" options={["English", "German", "Russian", "French", "Arabic"]} onChange={handleLangChange}/>
                    <Filter id="filter-period" name="Period" options={["≤3", "≤6", "≤9", "≤12", "≥12"]} onChange={handlePeriodChange}/>
                </div>
                <div className="courses__content">
                    {acLoading ? (<Loading />) : 
                    allCourses.courses.length !== 0 ? allCourses.courses.map(course => (
                            <Card width="500px" height="350px" marginRight="var(--cardMargin)" key={course['course_id']}>
                                <CourseCard 
                                    enrolled={false}  section="home"
                                    cid={course.course_id}
                                    thumb={course.thumb}
                                    title={course.title}
                                    creator={course.teacher}
                                    level={course.level}
                                    language={course.language}
                                    period={course.period}
                                    rate={course.rate}
                                    studentsNum={course.students_num}
                                    key={course.course_id}
                                />
                            </Card>
                    )) : (<Message message="No results were found );" type="normal" style={{gridColumn : "1/4"}}/>)}
                </div>
                {allCourses.courses.length !== 0 ? <Pagination resNum={allCourses.count} handleClick={updateOffset} depend={allCourses}/> : null}
            </div>
        </div>
    )
}

export default Catalog

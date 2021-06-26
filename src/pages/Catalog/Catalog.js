import {React, useContext} from 'react'
import UserContext from '../../contexts/UserContext'
// react components
import CourseCard from '../../components/CourseCard'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import ScrollArrows from '../../components/ScrollArrows/ScrollArrows'
import './catalog.css'

const Catalog = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    return (
        <div className="catalog">
            <div className="catalog__trending align">
                <div className="trending__title"><h2 className="title-color special-heading">Trending Courses</h2></div>
                <div className="trending__content">
                    <ScrollArrows size="3.5rem" sElem="course-card">
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  section="home"
                                image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                                title="Python: From Start to Finish, All You Need to Know"
                                creator="Jack Ma"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  section="home"
                                image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                                title="Learn Graphic Design With an Award-Winning Designer"
                                creator="Sklolo Harba"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  section="home"
                                image="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
                                title="Economics: Historical Moments that Shaped the World"
                                creator="Hankash Hankosh"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  section="home"
                                image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                                title="Python: From Start to Finish, All You Need to Know"
                                creator="Jack Ma"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  section="home"
                                image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                                title="Learn Graphic Design With an Award-Winning Designer"
                                creator="Sklolo Harba"
                            />
                        </Card>
                        <Card width="500px" height="350px" marginRight="var(--cardMargin)">
                            <CourseCard enrolled={false}  section="home"
                                image="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
                                title="Economics: Historical Moments that Shaped the World"
                                creator="Hankash Hankosh"
                            />
                        </Card>
                    </ScrollArrows>
                </div>
            </div>
            <div className="catalog__courses align">
                <div className="courses__title"><h2 className="title-color special-heading">All Courses</h2></div>
                <Pagination sections={ ["All Courses", "Design", "Animation", "Bussiness", "Programing", "Photo & Film"] }/>
                <div className="courses__content">
                    <Card width="100%" height="300px">
                        <CourseCard enrolled={false}  section="home"
                            image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                            title="Python: From Start to Finish, All You Need to Know"
                            creator="Jack Ma"
                        />
                    </Card>
                    <Card width="100%" height="300px">
                        <CourseCard enrolled={false}  section="home"
                            image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                            title="Learn Graphic Design With an Award-Winning Designer"
                            creator="Sklolo Harba"
                        />
                    </Card>
                    <Card width="100%" height="300px">
                        <CourseCard enrolled={false}  section="home"
                            image="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
                            title="Economics: Historical Moments that Shaped the World"
                            creator="Hankash Hankosh"
                        />
                    </Card>
                    <Card width="100%" height="300px">
                        <CourseCard enrolled={false}  section="home"
                            image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_960_720.jpg"
                            title="Python: From Start to Finish, All You Need to Know"
                            creator="Jack Ma"
                        />
                    </Card>
                    <Card width="100%" height="300px">
                        <CourseCard enrolled={false}  section="home"
                            image="https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_960_720.jpg"
                            title="Learn Graphic Design With an Award-Winning Designer"
                            creator="Sklolo Harba"
                        />
                    </Card>
                    <Card width="100%" height="300px">
                        <CourseCard enrolled={false}  section="home"
                            image="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
                            title="Economics: Historical Moments that Shaped the World"
                            creator="Hankash Hankosh"
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Catalog

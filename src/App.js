// react libs and framework imports
import {React, useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
}
  from 'react-router-dom'
// components imports
import Homepage from './pages/Home/Homepage'
import Catalog from './pages/Catalog/Catalog'
import Contact from './pages/Contact/Contact'
import Registeration from './pages/Reg/Registeration'
import PlansPage from './pages/Plans/PlansPage'
import Course from './pages/Course/Course'
import Classroom from './pages/Classroom/Classroom'
import Lesson from './pages/Lesson/Lesson'
import AddCourse from './pages/AddCourse/AddCourse'
import ScrollToTop from './components/ScrollToTop'
// import Blog from './pages/Blog/Blog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// contexts
import UserContext from './contexts/UserContext'
import RegisteredContext from './contexts/RegisteredContext'
import SubscribedContext from './contexts/SubscribedContext'
import LessonTitleContext from './contexts/LessonTitleContext'

// styles imports
import './App.css'

function App() {
  const [user, setUser] = useState({
    signed: false
  });
  const [registered, setRegistered] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [lessonTitle, setLessonTitle] = useState();
  return (
    <div className="App" on>
      <Router>
        <ScrollToTop />
        <UserContext.Provider value={{user, setUser}}>
        <LessonTitleContext.Provider value={{lessonTitle, setLessonTitle}}>
        <RegisteredContext.Provider value={{registered, setRegistered}} >
        <SubscribedContext.Provider value={{subscribed, setSubscribed}} >
          <Navbar />
          <Switch>
          <Route exact path="/">
              {user.signed ? 
              <Classroom /> :
              <Homepage />
              }
              <Footer />
            </Route>
            <Route exact path="/plans">
              <PlansPage />
              <Footer />
            </Route>
            <Route exact path="/catalog">
              <Catalog />
              <Footer />
            </Route>
            <Route exact path="/contact-us">
              <Contact />
              <Footer />
            </Route>
            <Route path="/registeration">
              <Registeration />
            </Route>
            <Route exact path="/course/:id">
              <Course />
              <Footer />
            </Route>
            <Route exact path="/course/:cid/lesson/:lid">
                <Lesson />
            </Route>
            <Route exact path="/add-course">
              <AddCourse />
            </Route>
            {/* <Route exact path="/blog">
              <Blog />
            </Route> */}
          </Switch>
        </SubscribedContext.Provider>
        </RegisteredContext.Provider>
        </LessonTitleContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  )
}

export default App

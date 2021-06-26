// react libs and framework imports
import {React, useState, useContext} from 'react'
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
// import Blog from './pages/Blog/Blog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// contexts
import UserContext from './contexts/UserContext'
// styles imports
import './App.css'

function App() {
  const [user, setUser] = useState({
    signed: false
  });
  return (
    <div className="App">
      <Router>     
        <UserContext.Provider value={{user, setUser}}>
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
            <Route exact path="/course">
              <Course />
              <Footer />
            </Route>
            <Route exact path="/lesson">
              <Lesson />
            </Route>
            <Route exact path="/add-course">
              <AddCourse />
            </Route>
            {/* <Route exact path="/blog">
              <Blog />
            </Route> */}
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  )
}

export default App

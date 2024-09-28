import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import About from './About'
import Contactme from './Contactme'
import ProjectInfo from './ProjectInfo'
import Certificates from './Certificates'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/certificates' element={<Certificates/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contactme/>}/>
            <Route path='/projectInfo' element={<ProjectInfo/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

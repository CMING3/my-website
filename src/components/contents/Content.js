import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import AboutMe from './AboutMe'
import MyProjects from './MyProjects'
import MyHobbies from './MyHobbies'

export default function Content() {

  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/MyProjects" element={<MyProjects/>}/>
        <Route path="/MyHobbies" element={<MyHobbies/>}/>
      </Routes>
    </div>
  )
}


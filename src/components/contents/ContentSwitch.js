import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import AboutMe from './AboutMe'
import MyProjects from './MyProjects'
import MyBlog from './MyBlog'

export default function Content() {

  return (
      <Routes>
        <Route  path={"/"} element={<Home/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/MyProjects" element={<MyProjects/>}/>
        <Route path="/MyBlog" element={<MyBlog/>}/>
      </Routes>
  )
}


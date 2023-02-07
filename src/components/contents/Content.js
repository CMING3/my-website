import React from 'react'
import Home from './Home'
import AboutMe from './AboutMe'
import MyProjects from './MyProjects'
import MyHobbies from './MyHobbies'

export default function Content(props) {

  return (
    <div>
        <Home/>
        <AboutMe/>
        <MyProjects/>
        <MyHobbies/>
    </div>
  )
}


import React from 'react'
import style from "../../styles/home.module.css"
import Particles from '../particle/particle'


export default function Home() {

  return (
    <div className={style.Home}>
      <div className={style.slideshow}>
      <Particles/>
        <span><p className={style.firstSentence}>Hello There !<br/>
        Welcome to my personal website</p></span>

        <span><p className={style.secondSentence}>This website is made by React<br/>
        And contain most information about me !</p></span>

        <span><p className={style.thirdSentence}>No matter what brings you here <br/>
        Feel free to browse !</p></span>
      </div>
    </div>
  )
}



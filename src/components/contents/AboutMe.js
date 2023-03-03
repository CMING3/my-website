import React from 'react'
import style from '../../styles/aboutme.module.css'
import Avatar from '../iconframe/avatar'

export default function AboutMe() {
  return (
    <div>
      <div className={style.aboutMe}>
        <div className={style.statusBoard}>
          <div className={style.avatar}>
            <Avatar/>
          </div>
          <div className={style.desc}>
            <h2>SZE PUI MING / CMING</h2>
            <hr/>
            <p>
              A creative man, living in Hong Kong and was a clerk before. One day he received an apocalypse, and then he started his journey to Web development. 
            </p>
            <ul>
              <li>Email : </li>
              <li><a href="mailto:cming.pms@gmail.com">cming.pms@gmail.com</a></li>
              <li>Github : </li>
              <li><a href="https://github.com/CMING3">https://github.com/CMING3</a></li>
              <li>Phone : </li>
              <li>67071747</li>
            </ul>
            <p>For more information about me, please feel free to contact me!</p>
          </div>
        </div>
        <p className={style.credit}>wallpaper image by <a href="https://wallpaper.mob.org/pc/image/sci_fi-spaceship-planet-761789.html">mob.org</a></p>
      </div>
    </div>
  )
}

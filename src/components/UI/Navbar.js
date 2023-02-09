import style from "../../styles/navbar.module.css"
import React from "react"
import {Link} from "react-router-dom"
export default function Navbar(){
    const navbarList = ["Home", "AboutMe", "MyProjects", "MyHobbies"]

    return(
        <div className={style.navbar}>
            {
                navbarList.map((item)=>{
                    return(
                        <Link to={"/"+item}>{item}</Link>
                    )
                })
            }
        </div>
    )
}
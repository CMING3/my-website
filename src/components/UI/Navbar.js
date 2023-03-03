import style from "../../styles/navbar.module.css"
import React from "react"
import {Link} from "react-router-dom"
export default function Navbar(){
    const navbarList = ["Home", "About Me", "My Projects", "My Blog"]

    return(
        <div className={style.navbar}>
            {
                navbarList.map((item)=>{
                    if (item === "Home"){
                        return(
                            <Link to="/" key={item}>{item}</Link>
                        )
                    }
                    return(
                        <Link to={"/"+item.replace(/\s+/g, "")} key={item}>{item}</Link>
                    )
                })
            }
        </div>
    )
}
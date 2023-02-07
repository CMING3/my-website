import style from "../../styles/navbar.module.css"
import React from "react"

export default function Navbar(){
    const navbarList = ["Home", "About Me", "My Projects", "My Hobbies"]
    const handleClick = () => {
        console.log("hi")
    }
    return(
        <div className={style.navbar}>
            {
                navbarList.map((item)=>{
                    return(
                        <div onClick={handleClick}>{item}</div>
                    )
                })
            }
        </div>
    )
}
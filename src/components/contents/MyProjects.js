import React, { useEffect, useState } from 'react'
import Style from '../../styles/myproject.module.css'
import ProjectData from '../data/ProjectData'

export default function MyProjects() {

  let [projectList, setProjectList] = useState([])

  useEffect(()=>{
    setProjectList(ProjectData)
  },[])
 

  return (
    <div className={Style.projectBody}>
      <div className={Style.projectHeader}>
        <h3>All Projects</h3>
      </div>
      <div className={Style.projectList}>
        {
          projectList.map((data)=>{
          return(
            <div key={data.id} className={Style.projectContainer}>
              <h3>{data.name}</h3>
              <p>{data.desc}</p>
              <div className={Style.btnContainer}>
                <a href={data.code}>View Code</a>
                <a href={data.page}>Live Preview</a>
              </div>
            </div>
          )
          })
        }
      </div>
    </div>
  )
}

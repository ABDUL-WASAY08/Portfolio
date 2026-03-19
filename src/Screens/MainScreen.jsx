import React from 'react'
import HeaderComp from '../Components/HeaderComp'
import HomeComp from '../Components/HomeComp'
import AboutComp from '../Components/AboutComp'
import ProjectsComp from '../Components/ProjectsComp'
import SkillsComp from '../Components/SkillsComp'

function MainScreen() {
  return (
    <div>
        <HeaderComp />
        <div id='home'>
            <HomeComp />
        </div>
        <div>
            <AboutComp />
        </div>
        <ProjectsComp />
        <SkillsComp />
    </div>
  )
}

export default MainScreen
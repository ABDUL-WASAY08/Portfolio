import React from 'react'
import HeaderComp from '../Components/HeaderComp'
import HomeComp from '../Components/HomeComp'

import ProjectsComp from '../Components/ProjectsComp'
import SkillsComp from '../Components/SkillsComp'
import AboutComp from '../Components/AboutComp'
import ExperienceSection from '../Components/Experience'


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
      <div id='Experience'>
        <ExperienceSection />
      </div>
      <SkillsComp />
    </div>
  )
}

export default MainScreen
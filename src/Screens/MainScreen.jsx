import React from 'react'
import HeaderComp from '../Components/HeaderComp'
import HomeComp from '../Components/HomeComp'

import ProjectsComp from '../Components/ProjectsComp'
import SkillsComp from '../Components/SkillsComp'
import AboutComp from '../Components/AboutComp'
import ExperienceSection from '../Components/Experience'
import FooterComp from '../Components/FooterComp'


function MainScreen() {
  return (
    <div>
      <HeaderComp />
      <div id='home'>
        <HomeComp />
      </div>
      <ProjectsComp />
      <div id='Experience'>
        <ExperienceSection />
      </div>
      <div>
        <AboutComp />
      </div>
      <SkillsComp />
      <div id='Footer'>
        <FooterComp />
      </div>

    </div>
  )
}

export default MainScreen
import React from 'react'
import Home from '../components/Home'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Project from '../components/projectSection/Project'
import Contact from './Contact'
import About from '../components/About'

function HomePage({mode}) {
  return (
    <div>
        <Home mode={mode} />
        <About mode={mode}/>
        <Education mode={mode} />
        <Skills mode={mode} />
        <Project mode={mode} />
        <Contact mode={mode} />

    </div>
  )
}

export default HomePage
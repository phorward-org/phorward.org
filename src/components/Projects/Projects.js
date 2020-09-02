import React, { useState } from 'react'
import Project from './Project'
import ActiveProject from './ActiveProject'
import './Projects.scss'
import { content } from './content'

export default function Projects() {
  const [active, setActive] = useState()
  const columns = ['', 'Name', 'Content', 'Difficulty', 'Progress']

  return (
    <div id="Projects">
      <h1>Projects</h1>
      <p>
        This is where the magic happens! Select a project from the list below to
        get started.
      </p>
      <div id="ProjectListHeader">
        {columns.map(c => (
          <h5 key={c}>{c}</h5>
        ))}
      </div>
      {content.projects.map((p, i) => (
        <Project key={i} project={{ ...p, index: i }} setActive={setActive} />
      ))}
      <ActiveProject active={active} handleClose={() => setActive(null)} />
    </div>
  )
}

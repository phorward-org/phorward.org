import React from 'react'
import './Projects.scss'

export default function Project({ project, setActive }) {
  const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  const arrayToString = arr => arr.join(', ')

  return (
    <div className="Project">
      <h4>{project.index + 1}</h4>
      <h3>{project.name}</h3>
      <h6>{arrayToString(project.content)}</h6>
      <h6>{difficulties[project.difficulty]}</h6>
      <button onClick={() => setActive(project)}>Open Project</button>
    </div>
  )
}

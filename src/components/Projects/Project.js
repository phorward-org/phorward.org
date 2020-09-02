import React from 'react'
import './Projects.scss'
import { Link } from 'react-router-dom'

export default function Project({ project }) {
  const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  const arrayToString = arr => arr.join(', ')

  return (
    <div className="Project">
      <h4>{project.index + 1}</h4>
      <h3>{project.name}</h3>
      <h6>{arrayToString(project.content)}</h6>
      <h6>{difficulties[project.difficulty]}</h6>
      <Link to={`/projects/${project.id}`}>
        <button>Open Project</button>
      </Link>
    </div>
  )
}

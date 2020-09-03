import React, { useState } from 'react'
import Project from './Project/Project'
import './Projects.scss'
import { Input } from '../Input/Input'
import useWidth from '../../hooks/useWidth'

export default function Projects({ projects }) {
  const { mobile } = useWidth()
  const [search, setSearch] = useState('')
  const columns = ['', 'Name', 'Content', 'Difficulty', 'Progress']

  function filterBySearch(a) {
    return a.filter(a => a.name.toLowerCase().includes(search.toLowerCase()))
  }

  const filtered = projects ? filterBySearch(projects) : null

  const searchStyle = mobile
    ? null
    : { position: 'absolute', right: 64, top: 140, width: 280 }

  return projects ? (
    <div id="Projects">
      <h1>Projects</h1>
      <p>
        This is where the magic happens! Select a project from the list below to
        get started.
      </p>
      <Input
        label="Search"
        onChange={setSearch}
        value={search}
        style={searchStyle}
      />
      {!mobile && (
        <div id="ProjectListHeader">
          {columns.map(c => (
            <h5 key={c}>{c}</h5>
          ))}
        </div>
      )}
      {filtered.length ? (
        filtered.map((p, i) => <Project key={i} project={{ ...p, index: i }} />)
      ) : (
        <h4 className="NoProjects">No projects match your search!</h4>
      )}
    </div>
  ) : (
    <div id="Projects">
      <h1>Projects</h1>
      <p>
        This is where the magic happens! Select a project from the list below to
        get started.
      </p>
      <h4 className="NoProjects">Loading projects...</h4>
    </div>
  )
}

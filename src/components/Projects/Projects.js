import React, { useState } from 'react'
import Project from './Project'
import './Projects.scss'
import { content } from './content'
import { Input } from '../Input/Input'

export default function Projects() {
  const [search, setSearch] = useState('')
  const columns = ['ID', 'Name', 'Content', 'Difficulty', 'Progress']

  function filterBySearch(a) {
    return a.filter(a => a.name.toLowerCase().includes(search.toLowerCase()))
  }

  const filtered = filterBySearch(content.projects)

  return (
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
        style={{ position: 'absolute', right: 64, top: 140, width: 240 }}
      />
      <div id="ProjectListHeader">
        {columns.map(c => (
          <h5 key={c}>{c}</h5>
        ))}
      </div>
      {filtered.length ? (
        filtered.map((p, i) => <Project key={i} project={{ ...p, index: i }} />)
      ) : (
        <h4 className="NoProjects">No projects match your search!</h4>
      )}
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import Project from './Project'
import './Projects.scss'
import { Input } from '../Input/Input'
const githubUrl = `https://api.github.com/orgs/HelloTidBytes/repos`

export default function Projects() {
  const [search, setSearch] = useState('')
  const [projects, setProjects] = useState()
  const columns = ['ID', 'Name', 'Content', 'Difficulty', 'Progress']

  useEffect(() => {
    async function fetchProjects() {
      const fetchedProjects = []
      const r = await fetch(githubUrl)
      const repos = await r.json()
      console.log(repos)
      for (const r of repos) {
        console.log(`${r.url}/config.json`)
        const r2 = await fetch(
          `https://raw.githubusercontent.com/HelloTidBytes/${r.name}/master/config.json`
        )
        const config = await r2.json()
        if (config) fetchedProjects.push(config)
      }
      setProjects(fetchedProjects)
    }
    fetchProjects()
  }, [])

  function filterBySearch(a) {
    return a.filter(a => a.name.toLowerCase().includes(search.toLowerCase()))
  }

  const filtered = projects ? filterBySearch(projects) : null

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

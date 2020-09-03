import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Projects from '../Projects/Projects'
import Tutorials from '../Tutorials/Tutorials'
import About from '../About/About'
import Login from '../Login/Login'
import ActiveProject from '../Projects/ActiveProject/ActiveProject'
import { AuthProvider } from '../../auth/AuthProvider'
import './App.scss'

const githubUrl = `https://api.github.com/orgs/HelloTidBytes/repos`

function App() {
  const [projects, setProjects] = useState()

  useEffect(() => {
    async function fetchProjects() {
      const fetchedProjects = []
      const r = await fetch(githubUrl)
      const repos = await r.json()
      for (const r of repos) {
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

  return (
    <main className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header hideBackground />
              <Landing />
            </Route>
            <Route path="/projects/:id">
              <Header />
              <Projects projects={projects} />
              <ActiveProject projects={projects} />
            </Route>
            <Route path="/projects">
              <Header />
              <Projects projects={projects} />
            </Route>
            <Route path="/tutorials">
              <Header />
              <Tutorials />
            </Route>
            <Route path="/about">
              <Header />
              <About />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <Route>
              <Header hideBackground />
              <Landing />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </main>
  )
}

export default App

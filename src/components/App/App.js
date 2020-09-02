import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Projects from '../Projects/Projects'
import Tutorials from '../Tutorials/Tutorials'
import About from '../About/About'
import './App.scss'
import ActiveProject from '../Projects/ActiveProject'

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header hideBackground />
            <Landing />
          </Route>
          <Route path="/projects/:id">
            <Header />
            <Projects />
            <ActiveProject />
          </Route>
          <Route path="/projects">
            <Header />
            <Projects />
          </Route>
          <Route path="/tutorials">
            <Header />
            <Tutorials />
          </Route>
          <Route path="/about">
            <Header />
            <About />
          </Route>
          <Route>
            <Header hideBackground />
            <Landing />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App

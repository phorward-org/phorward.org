import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Contact from '../Contact/Contact'
import Landing from '../Landing/Landing'
import Header from '../Header/Header'
import About from '../About/About'
import './App.scss'
import Projects from '../Projects/Projects'

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header hideBackground />
            <Landing />
          </Route>
          <Route path="/who">
            <Header />
            <About />
          </Route>
          <Route path="/what">
            <Header />
            <Projects />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App

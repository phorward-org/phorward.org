import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from '../Contact/Contact'
import Landing from '../Landing/Landing'
import Header from '../Header/Header'
import About from '../About/About'
import './App.scss'

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
            <Contact />
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

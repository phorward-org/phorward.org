import React from 'react'
import './Landing.scss'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div id="Landing">
      <h1>
        Real world projects,
        <br />
        step by step.
      </h1>
      <h4>
        Build your portfolio and practice job ready skills, all in the cloud
        with PracticeProblems.
      </h4>
      <div>
        <Link to="/projects">
          <button>Get Started</button>
        </Link>
        <Link to="/about">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  )
}

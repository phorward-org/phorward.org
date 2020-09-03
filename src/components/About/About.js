import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div id="About">
      <h1>
        <span role="img" aria-label="About">
          ℹ️
        </span>
        About
      </h1>
      <div>
        <img src="/logo.svg" alt="TidBytes Logo" />
        <div>
          <p style={{ fontWeight: 700 }}>Hi, we're TidBytes.</p>
          <p>
            We believe in accessible education, and want to help pave a pathway
            for people of all backgrounds to become software engineers. We
            believe that full-stack web development is one of the most
            accessible and in-demand skill sets, and are working to provide real
            world projects to bridge the gap between tutorials and job
            interviews.
          </p>
        </div>
      </div>

      <div className="right">
        <div>
          <p>
            While working in the self-taught and bootcamp developer space, we
            noticed a gap for aspiring engineers.{' '}
            <span style={{ fontWeight: 700 }}>
              There are tons of amazing tutorial resources available for
              beginners to learn the basics,
            </span>{' '}
            including but not limited to{' '}
            <a
              href="https://www.codecademy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codecademy
            </a>{' '}
            and{' '}
            <a
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Free Code Camp
            </a>
            . There are even some like{' '}
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Odin Project
            </a>{' '}
            that are focused on step-by-step builds of basic applications
            (awesome, we love everything about it).
          </p>
          <p>
            But the gap between finishing a javascript tutorial and building
            your first web app from scratch is a big one, and getting started
            can be daunting.
          </p>
        </div>

        <img src="/free_resources.svg" alt="Free Resources" />
      </div>

      <div>
        <img src="/engineer.jpg" alt="Software Engineer" />
        <div>
          <p style={{ fontWeight: 700 }}>
            There are so many problems a new engineer can run into while
            building their first project from scratch.
          </p>
          <p>
            And in fact, many of those problems have nothing to do with the
            tutorial they just finished. Version control, package managers, DNS
            configuration, the list goes on. We wanted to know if there was a
            way we could help.
          </p>
          <p>
            Could there be an easier path into publishing code as a web
            developer? Is there a way to provide real world experience that
            mirrors an on-the-job workflow? How might new engineers solve real
            world problems in a realistic amount of time, and get the feedback
            they need to continuously improve their skills?
          </p>
        </div>
      </div>

      <div className="right">
        <div>
          <p style={{ fontWeight: 700 }}>Welcome to TidBytes.</p>
          <p>
            We build incomplete projects for new engineers to take, improve,
            own, and deploy. Using public GitHub repos and pull requests, we
            provide completely free code review and feedback. We hope that we
            can help engineers practice, improve, and build their portfolio.
          </p>
          <p>Interested in getting started?</p>
          <Link to="/projects">
            <button>Open your First Project</button>
          </Link>
        </div>
        <img src="/logo.svg" alt="TidBytes Logo" />
      </div>
    </div>
  )
}

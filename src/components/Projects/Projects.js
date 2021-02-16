import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.scss'

export default function Projects() {
  return (
    <div id="About">
      <h1>What We Do</h1>
      <br />
      <p>
        We design, build, deploy, and maintain custom software applications for
        community building organizations in and around Philadelphia. Using the
        most up-to-date and cutting edge development practices, we deliver
        high-quality software at no cost to the organizations we partner with.
        Check out some example projects we've built below:
      </p>
      <div>
        <video src="/sharing-excess.mov" autoPlay muted loop />
        <div>
          <h2>Spotlight: Sharing Excess</h2>
          <p>
            Managing the redistribution of over 1 million pounds of food since
            2018, Sharing Excess looked to build an application to track
            drivers, routes, and analytics for their complete logistical
            operation.
          </p>
          <p>
            We deployed a completely serverless progressive web application and
            setup version control with CI/CD pipelines to be lightweight,
            configurable, and agile. Additionally, our analytics tools help's
            SE's data team get better insight into payroll and future
            scalability.
          </p>
          <a
            href="https://www.sharingexcess.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Learn More about Sharing Excess</button>
          </a>
        </div>
      </div>

      <div className="right">
        <div>
          <p style={{ fontWeight: 700 }}>
            Have a project that could use our help?
          </p>
          <p>
            We're constantly looking for organizations that could benefit from
            new software. Use the button below to get in touch with our team,
            and we'll be sure to follow up and learn more about your work.
          </p>
          <p>Interested in getting started?</p>
          <Link to="/contact">
            <button>Reach Out</button>
          </Link>
        </div>
        <img src="/logo_white.png" alt="Logo" />
      </div>
    </div>
  )
}

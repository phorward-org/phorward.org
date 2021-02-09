import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

export default function About() {
  return (
    <div id="About">
      <h1>Who We Are</h1>
      <div>
        <img src="/logo_white.png" alt="TidBytes Logo" />
        <div>
          <p style={{ fontWeight: 700 }}>Hi, we're Phorward.</p>
          <p>
            We're a team of community minded software engineers with the skills
            and resources to meaningfully change how non-profits run. We use our
            time and energy to build software applications that help community
            organizations do what they do faster, better, and at a larger scale.
            For free.
          </p>
        </div>
      </div>

      <div className="right">
        <div>
          <p style={{ fontWeight: 700 }}>So how does that work?</p>
          <p>
            We acknowledge that we have the privilege to work in an in-demand,
            well-paying industry that often creates value{' '}
            <span style={{ fontStyle: 'italic' }}>outside</span> our own
            communities. With that in mind, we use the flexibility that remote
            work provides to build software that makes a difference right here
            at home.
          </p>
        </div>

        <img src="/philly.png" alt="Free Resources" />
      </div>

      <div>
        <img src="/networking.jpg" alt="Software Engineer" />
        <div>
          <p style={{ fontWeight: 700 }}>
            Our goal is to increase our city's access to tech, in more ways than
            one.
          </p>
          <p>
            Philly is home to hundreds of nonprofits working to better the
            community we live in. We know that we can improve the way they work
            by providing the right tools and technologies for the job.
          </p>
          <p>
            We aim to partner with training programs in the city to provide
            meaningful work for up-and-coming engineers to gain work experience
            and work in a real-world environment. Access is everything, and we
            want to share the resources we have with those who need it most.
          </p>
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

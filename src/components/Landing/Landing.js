import React, { useState, useEffect } from 'react'
import './Landing.scss'
import { Link } from 'react-router-dom'
import useMobile from '../../hooks/useMobile'

export default function Landing() {
  const mobile = useMobile()
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')

  useEffect(() => {
    const s1 = 'Real world projects,         '
    const s2 = 'always free code review.  '
    for (const c in s1 + s2) {
      setTimeout(() => {
        if (c < s1.length) {
          setLine1(s1.substring(0, c))
        } else {
          setLine2(s2.substring(0, c - s1.length))
        }
      }, 320 + 64 * c)
    }
  }, [])

  return (
    <div id="Landing">
      <h1 id="Line1">
        {line1}
        {!mobile && <div id="Cursor1" />}
      </h1>
      <h1 id="Line2">
        {line2}
        {!mobile && <div id="Cursor2" />}
      </h1>
      <h4>
        Build your portfolio by working on real web apps,
        <br />
        and solve the problems you'll see on the job.
      </h4>
      <div>
        <Link to="/projects">
          <button>Start a Project</button>
        </Link>
        <Link to="/about">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  )
}

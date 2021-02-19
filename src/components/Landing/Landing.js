import React, { useState, useEffect } from 'react'
import './Landing.scss'
import { Link } from 'react-router-dom'
import useMobile from '../../hooks/useMobile'

export default function Landing() {
  const mobile = useMobile()
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')

  useEffect(() => {
    const s1 = 'Software as a         '
    const s2 = '*Public Service.   '
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
        A team of community focused engineers, Phorward supports Philadelphia
        nonprofits by designing and developing the software they need - for
        free.
      </h4>
      <div>
        <Link to="/contact">
          <button>Start a Project</button>
        </Link>
        <Link to="/who">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  )
}

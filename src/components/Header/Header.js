import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
import useMobile from '../../hooks/useMobile'

export default function Header({ hideBackground }) {
  const mobile = useMobile()
  const { pathname } = useLocation()
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(!expanded)
  const isActive = a => pathname.replace('/', '') === a

  const HeaderLinks = () => (
    <ul>
      <Link to="/projects" onClick={() => setExpanded(false)}>
        <li className={isActive('projects') ? 'active' : ''}>Projects</li>
      </Link>
      <Link to="/tutorials" onClick={() => setExpanded(false)}>
        <li className={isActive('tutorials') ? 'active' : ''}>Tutorials</li>
      </Link>
      <Link to="/about" onClick={() => setExpanded(false)}>
        <li className={isActive('about') ? 'active' : ''}>About</li>
      </Link>
      <Link to="/contact" onClick={() => setExpanded(false)}>
        <li className={isActive('contact') ? 'active' : ''}>Contact</li>
      </Link>
    </ul>
  )

  return (
    <header
      id="Header"
      className={`
        ${hideBackground ? 'transparent' : ''}
        ${expanded ? ' expanded' : ''}
      `}
    >
      <Link to="/">
        <h2 onClick={() => setExpanded(false)}>TidBytes</h2>
      </Link>
      <aside id="HeaderBackground" />
      {mobile ? (
        <>
          <img src="/menu.png" alt="Menu" onClick={toggleExpanded} />
          <div id="HeaderLinksMobile" className={expanded ? 'expanded' : ''}>
            <HeaderLinks />
          </div>
        </>
      ) : (
        <HeaderLinks />
      )}
    </header>
  )
}

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

export default function Header({ hideBackground }) {
  const { pathname } = useLocation()
  const isActive = a => pathname.replace('/', '') === a

  return (
    <header className={hideBackground ? 'Header transparent' : 'Header'}>
      <Link to="/">
        <h2>TidBytes</h2>
      </Link>
      <aside id="HeaderBackground" />
      <ul>
        <Link to="/projects">
          <li className={isActive('projects') ? 'active' : ''}>Projects</li>
        </Link>
        <Link to="/tutorials">
          <li className={isActive('tutorials') ? 'active' : ''}>Tutorials</li>
        </Link>
        <Link to="/about">
          <li className={isActive('about') ? 'active' : ''}>About</li>
        </Link>
      </ul>
    </header>
  )
}

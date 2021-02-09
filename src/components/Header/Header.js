import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
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
      <Link to="/who" onClick={() => setExpanded(false)}>
        <li className={isActive('who') ? 'active' : ''}>Who We Are</li>
      </Link>
      <Link to="/what" onClick={() => setExpanded(false)}>
        <li className={isActive('what') ? 'active' : ''}>What We Do</li>
      </Link>
      <Link to="/contact" onClick={() => setExpanded(false)}>
        <li className={isActive('contact') ? 'active' : ''}>Reach Out</li>
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
        <img src={Logo} alt="Home" />
      </Link>
      <aside id="HeaderBackground" />
      {mobile ? (
        <>
          <img
            id="MenuButton"
            src="/menu.png"
            alt="Menu"
            onClick={toggleExpanded}
          />
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

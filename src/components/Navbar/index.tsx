import { useEffect, useMemo, useState } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import { HOME } from '../../config/routes'
import FullWhiteLogo from '../../assets/images/full-white-logo.png'
import WhiteLogo from '../../assets/images/white-logo.png'

import './styles.css'

type NavbarProps = {
  routes: {
    title: string
    path: string
  }[]
}

export const Navbar = ({ routes }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    if (isMenuOpen)
      document.body.style.overflow = 'hidden'
    else
      document.body.style.overflow = 'scroll'

    return () => {
      document.body.style.overflow = 'scroll'
    }
}, [isMenuOpen]);

  const renderRoutes = useMemo(() => routes.map((route) => (
    <li key={route.path} onClick={() => setIsMenuOpen(false)}>
      <NavLink
        to={route.path}
        className={route.path === location.pathname ? 'active' : ''}
      >
        {route.title}
      </NavLink>
    </li>
  )), [location.pathname, routes])

  return (
    <nav>
      <div className='logo'>
        <NavLink to={HOME}>
          <img src={WhiteLogo} />
        </NavLink>
      </div>
      <div className='full-logo'>
        <NavLink to={HOME}>
          <img src={FullWhiteLogo} />
        </NavLink>
      </div>

      <div>
        <ul className={isMenuOpen ? 'navbar active' : 'navbar'}>
          {renderRoutes}
        </ul>
      </div>

      <div className='mobile'>
        <i
          className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
    </nav>
  )
}
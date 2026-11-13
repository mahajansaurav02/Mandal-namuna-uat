import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CHeader } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu, cilX, cilChevronBottom } from '@coreui/icons'
import LanguageSelector from '../components/language-selector'
import { AppHeaderDropdown } from './header/index'
import navigation from '../_nav'
import '../layout/AppHeader.css'

const NavDropdown = ({ item }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = item.items?.some((sub) => location.pathname === sub.to)

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        className={`nav-dropdown-toggle ${isActive ? 'active' : ''}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{item.name}</span>
        <CIcon icon={cilChevronBottom} size="sm" className={`chevron ${open ? 'rotate' : ''}`} />
      </button>
      
      {open && (
        <div className="dark-dropdown-menu">
          {item.items.map((sub, i) => (
            <NavLink
              key={i}
              to={sub.to}
              className={({ isActive }) =>
                `dark-dropdown-item ${isActive ? 'active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {sub.icon && <span className="nav-icon-wrap">{sub.icon}</span>}
              <span>{sub.name}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

const AppHeader = () => {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <div className="clarasight-header-wrapper">
      {/* 1. Changed to position="fixed" for guaranteed stickiness */}
      <CHeader position="fixed" className="clarasight-header mb-0">
        <div className="header-container">
          
          {/* LEFT: Brand */}
          <div className="header-left">
            <NavLink to="/dashboard" className="clarasight-brand">
              <div className="brand-logo-icon">
                <div className="arc"></div>
              </div>
              <span className="brand-text">मंडळ नमूना प्रणाली</span>
            </NavLink>
          </div>

          {/* CENTER: Desktop Nav */}
          <div className="header-center">
            <nav className="desktop-nav">
              {navigation.map((item, idx) =>
                item.items ? (
                  <NavDropdown key={idx} item={item} />
                ) : (
                  <NavLink
                    key={idx}
                    to={item.to}
                    className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                  </NavLink>
                ),
              )}
            </nav>
          </div>

          {/* RIGHT: Actions */}
          <div className="header-right">
            <div className="glowing-cta-wrapper">
              <AppHeaderDropdown />
            </div>

            {/* Mobile toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <CIcon icon={mobileOpen ? cilX : cilMenu} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mobile-menu-dark">
            {navigation.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to || '#'}
                className="mobile-nav-item"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </CHeader>
      
      {/* 2. Spacer div to prevent content from hiding behind the fixed header */}
      <div className="header-spacer"></div>
    </div>
  )
}

export default AppHeader
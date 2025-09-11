import React from 'react'
import Logo from '../assets/Logo.png'
import './navBar.css'

export const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-brand' onClick={scrollToTop}>
          <img src={Logo} alt="Link Vault Logo" className="navbar-logo" />
          <span className='brand-text'>Link Vault</span>
        </div>
        
        <div className="navbar-info">
          <span className='tagline'>Your Personal Bookmark Manager</span>
        </div>
      </div>
    </nav>
  )
}

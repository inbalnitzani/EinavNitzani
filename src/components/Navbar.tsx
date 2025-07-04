import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{ padding: '1rem' }}>
      <div className="container-fluid">
        <ul className="navbar-nav justify-content-center w-100 mb-2 mb-lg-0" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', margin: 0 }}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link primary-text">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link primary-text">ABOUT</NavLink>
          </li>
          <li className="nav-item dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
            <NavLink to="/films" className="nav-link dropdown-toggle primary-text" role="button" data-bs-toggle="dropdown" aria-expanded={showDropdown} style={{ cursor: 'pointer' }}>
              FILMS
            </NavLink>
            <ul className={`dropdown-menu${showDropdown ? ' show' : ''}`} style={{
              position: 'absolute',
              top: '2.5rem',
              left: 0,
              minWidth: 'max-content',
              whiteSpace: 'nowrap',
              background: 'none',
              border: 'none',
              boxShadow: 'none',
            }}>
              <li><a href="/films#screenwriter-director" className="dropdown-item films-dropdown-link">Screenwriter/Director</a></li>
              <li><a href="/films#producer" className="dropdown-item films-dropdown-link">Producer</a></li>
              <li><a href="/films#production-designer" className="dropdown-item films-dropdown-link">Production Designer/Costume Designer</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link primary-text">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 
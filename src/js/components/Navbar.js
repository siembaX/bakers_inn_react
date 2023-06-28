import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closedButton = {
    color:'#000'
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinkStyles = ({ isActive }) => {
    
    return {
      color: isActive ? '#261B6C' : '#261b6c8c',
    };
  };

  return (
    <div className="nav">
      <NavLink style={navLinkStyles} to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <NavLink style={navLinkStyles} onClick={closeMenu} to="/about">About Us</NavLink>
        <NavLink style={navLinkStyles} onClick={closeMenu} to="/products">Products</NavLink>
        <NavLink style={navLinkStyles} onClick={closeMenu} to="/recipes">Recipes</NavLink>
        <NavLink style={navLinkStyles} onClick={closeMenu} to="/kids">Kids</NavLink>
        <NavLink to="/contact" onClick={closeMenu} ><button>Contact</button></NavLink>
      </div>
      {/* {isOpen && (
        <div className="overlay" onClick={closeMenu}>

          <div className="overlay-links">
            <NavLink style={navLinkStyles} to="/about" onClick={closeMenu}>About Us</NavLink>
            <NavLink style={navLinkStyles} to="/products" onClick={closeMenu}>Products</NavLink>
            <NavLink style={navLinkStyles} to="/recipes" onClick={closeMenu}>Recipes</NavLink>
            <NavLink style={navLinkStyles} to="/kids" onClick={closeMenu}>Kids</NavLink>
            <NavLink to="/contact" onClick={closeMenu}><button>Contact</button></NavLink>
          </div>
        </div>
      )} */}
      <button className="toggle-button" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? 'open' : ''}`} />
        <span className={`bar ${isOpen ? 'open' : ''}`} />
        <span className={`bar ${isOpen ? 'open' : ''}`} />
      </button>
    </div>
  );
};

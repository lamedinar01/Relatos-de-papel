/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../Context/CartContext';
import { CategoryMenu } from './CategoryMenu';

export const Navbar = ({ onCartClick }) => {
  const { itemCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <NavLink to="/" className="navbar-brand text-primary fw-bold">
          Relatos de Papel
        </NavLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <Menu />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/bookstore" className="nav-link">
                Tienda
              </NavLink>
            </li>
            <li className="nav-item">
              <CategoryMenu />
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>

          <button
            onClick={onCartClick}
            className="btn btn-link position-relative"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
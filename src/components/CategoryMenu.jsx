import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="nav-link dropdown-toggle"
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        Categorías
        <ChevronDown size={16} className="ms-1" />
      </button>

      <ul
        className={`dropdown-menu ${isOpen ? 'show' : ''}`}
        onClick={closeMenu}
      >
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/categoria/${category.id}`}
              className="dropdown-item"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

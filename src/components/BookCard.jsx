import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

export const BookCard = ({ book }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(book);
  };

  return (
    <div className="card h-100 book-card">
      <Link to={`/libro/${book.id}`} className="text-decoration-none">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="card-img-top"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title text-dark">{book.title}</h5>
          <p className="card-text text-muted">{book.author}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 mb-0 text-primary">${book.price}</span>
            <button
              onClick={handleAddToCart}
              className="btn btn-primary rounded-circle"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
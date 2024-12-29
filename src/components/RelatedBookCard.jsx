/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../Context/CartContext';

export const RelatedBookCard = ({ book }) => {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/libro/${book.id}`}>
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-2">{book.author}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${book.price}</span>
          <button
            onClick={() => addItem(book)}
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

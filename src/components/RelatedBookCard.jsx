import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../Context/CartContext';

export const RelatedBookCard = ({ book }) => {
  const { addItem } = useCart();

  return (
    <div className="relative">
      <Link to={`/libro/${book.id}`}>
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full max-w-xs mx-auto max-h-80 object-contain rounded-lg shadow-lg card-img-center"
          style={{
            height: "400px",
            marginRight: "60px !important",
            objectFit: "cover",
          }}
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
            <ShoppingCart size={200} />dfgfgdfgdfgdf
          </button>
        </div>
      </div>
    </div>
  );
};

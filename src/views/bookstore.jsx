import React, { useState } from 'react';
import { BookCard } from '../components/BookCard';
import { SearchBar } from '../components/SearchBar';
import { useCart } from '../hooks/useCart';
import { books } from '../data/books';

export const BookStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('title');
  const { addToCart } = useCart();

  const filteredBooks = books.filter(book => {
    const searchLower = searchTerm.toLowerCase();
    switch (filterBy) {
      case 'title':
        return book.title.toLowerCase().includes(searchLower);
      case 'author':
        return book.author.toLowerCase().includes(searchLower);
      case 'isbn':
        return book.isbn.includes(searchTerm);
      case 'genre':
        return book.genre.toLowerCase().includes(searchLower);
      default:
        return true;
    }
  });

  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold mb-4">Nuestra Colección</h1>
      
      <SearchBar
        onSearch={setSearchTerm}
        onFilterChange={setFilterBy}
      />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="col">
            <BookCard
              book={book}
              onAddToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
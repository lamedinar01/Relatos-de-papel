/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { books } from "../data/books";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { RelatedBookCard } from "../components/RelatedBookCard";

export const BookDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();

  // Find the book details by ID or return null if not found
  const book = books.find((b) => b.id === id);

  // If the book isn't found, render an error message and link to the bookstore
  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Libro no encontrado
        </h1>
        <button className="btn btn-link text-black-600 hover:text-black-700 mb-8">
          <Link
            to="/bookstore"
            className="inline-flex items-center gap-2 text-white-600 text-lg font-medium mb-8 hover:text-white-700 transition"
          >
            <ArrowLeft size={30} />
            Volver a la tienda
          </Link>
        </button>
      </div>
    );
  }

  // Filter related books based on genre, excluding the current book
  // const relatedBooks = books
  //   .filter((b) => b.genre === book.genre && b.id !== book.id)
  //   .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back to bookstore link */}
      <button className="btn btn-link text-black-600 hover:text-black-700 mb-8">
        <Link
          to="/bookstore"
          className="inline-flex items-center gap-2 text-white-600 text-lg font-medium mb-8 hover:text-white-700 transition"
        >
          <ArrowLeft size={30} />
          Volver a la tienda
        </Link>
      </button>
      {/* Book details section */}
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
        }}
        className="flex flex-col lg:flex-row gap-8 items-start"
      >
        <div className="relative">
          {/* Book cover */}
          <img
            style={{
              height: "400px",
              //width: "400px",
              marginRight: "60px !important",
              objectFit: "cover",
            }}
            src={book.coverImage}
            alt={book.title}
            className="w-full max-w-xs mx-auto max-h-80 object-contain rounded-lg shadow-lg card-img-center"
          />
          {/* Book genre badge */}
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            
          </span>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {book.title}
            </h1>
            <p className="text-lg text-gray-700 font-medium mb-4">
              {book.author}
            </p>
            <p className="text-2xl font-bold text-blue-600 mb-6">
              ${book.price}
            </p>

            {/* Book description and details */}
            <div className="space-y-2 mb-8 text-sm text-gray-700">
              <p className="leading-relaxed">{book.description}</p>
              <p className="leading-relaxed"><strong>Genero:</strong> {book.genre}</p>
              <p>
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <p>
                <strong>Fecha de publicación:</strong> {book.publishDate}
              </p>
            </div>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={() => addItem(book)}
            className="btn btn-primary flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <ShoppingCart size={20} />
            Agregar al Carrito
          </button>
        </div>
      </div>

      {/* Related books section */}
      {/* {relatedBooks.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Libros Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedBooks.map((relatedBook) => (
              <RelatedBookCard key={relatedBook.id} book={relatedBook} />
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

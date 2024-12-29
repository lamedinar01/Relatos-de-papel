/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Welcome } from "../views/welcome";
import { BookStore } from "../views/bookstore";
import { BookDetail } from '../views/bookdetail';
import { Checkout } from '../views/checkout';
import { About } from '../views/About';
import { Contact } from '../views/Contact';
// import { NotFound } from '../views/NotFound';

import { Navbar } from "../components/Navbar";
import { Cart } from "../components/Cart";
import { CartNotification } from "../components/CartNotification";

import { useNotification } from "../hooks/useNotification";

import { CartProvider } from "../Context/CartContext";
export const AppRouter = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isVisible, message, showNotification } = useNotification();

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-vh-100 bg-light">
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <CartNotification isVisible={isVisible} message={message} />

          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/bookstore" element={<BookStore />} />
            <Route path="/libro/:id" element={<BookDetail />} />
            <Route path="/pago" element={<Checkout />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/categoria/:categoryId" element={<BookStore />}/>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

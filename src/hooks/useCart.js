import { useState, useEffect } from 'react';

const CART_STORAGE_KEY = 'shopping-cart';

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [cart]);

  const addToCart = (book) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.book.id === book.id);
      
      if (existingItem) {
        return currentCart.map(item =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentCart, { book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart(currentCart => currentCart.filter(item => item.book.id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(bookId);
      return;
    }
    
    setCart(currentCart =>
      currentCart.map(item =>
        item.book.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total
  };
};
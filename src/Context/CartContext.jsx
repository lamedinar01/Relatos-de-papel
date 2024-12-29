import React, { createContext, useContext } from 'react';
import { useCartState } from '../hooks/useCartState';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { 
    state, 
    addItem, 
    removeItem, 
    updateQuantity, 
    clearCart,
    error 
  } = useCartState();

  const value = {
    items: state.items || [],
    itemCount: state.itemCount || 0,
    total: state.total || 0,
    state,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
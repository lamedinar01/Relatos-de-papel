import { useReducer, useEffect, useState } from 'react';
import { cartReducer } from '../reducers/cartReducer';
import { CartActionTypes } from '../constants/cartActions';
import { loadCartState, saveCartState } from '../utils/storage';

const initialState = {
  items: [],
  itemCount: 0,
  total: 0
};

export const useCartState = () => {
  const [state, dispatch] = useReducer(
    cartReducer, 
    initialState, 
    () => loadCartState() || initialState
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      saveCartState(state);
      setError(null);
    } catch (err) {
      setError('Error saving cart data');
      console.error('Cart storage error:', err);
    }
  }, [state]);

  const addItem = (item) => {
    if (!item) return;
    dispatch({ type: CartActionTypes.ADD_ITEM, payload: item });
  };

  const removeItem = (itemId) => {
    if (!itemId) return;
    dispatch({ type: CartActionTypes.REMOVE_ITEM, payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    if (!itemId || quantity === undefined) return;
    dispatch({
      type: CartActionTypes.UPDATE_QUANTITY,
      payload: { itemId, quantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: CartActionTypes.CLEAR_CART });
  };

  return {
    state,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };
};
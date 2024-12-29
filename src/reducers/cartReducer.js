import { CartActionTypes } from '../constants/cartActions';
import { calculateCartTotals } from '../utils/cartCalculations';

const ensureValidState = (state) => {
  return {
    items: Array.isArray(state?.items) ? state.items : [],
    itemCount: state?.itemCount || 0,
    total: state?.total || 0
  };
};

export const cartReducer = (state, action) => {
  // Ensure state is valid before any operations
  const validState = ensureValidState(state);

  switch (action.type) {
    case CartActionTypes.ADD_ITEM: {
      if (!action.payload) return validState;

      const existingItem = validState.items.find(
        item => item.id === action.payload.id
      );

      const items = existingItem
        ? validState.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...validState.items, { ...action.payload, quantity: 1 }];

      return calculateCartTotals(items);
    }

    case CartActionTypes.REMOVE_ITEM: {
      if (!action.payload) return validState;
      
      const items = validState.items.filter(item => item.id !== action.payload);
      return calculateCartTotals(items);
    }

    case CartActionTypes.UPDATE_QUANTITY: {
      const { itemId, quantity } = action.payload || {};
      if (!itemId || quantity < 1) return validState;

      const items = validState.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );

      return calculateCartTotals(items);
    }

    case CartActionTypes.CLEAR_CART:
      return {
        items: [],
        itemCount: 0,
        total: 0
      };

    case CartActionTypes.SYNC_STORAGE:
      return ensureValidState(action.payload);

    default:
      return validState;
  }
};
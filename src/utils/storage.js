const STORAGE_KEY = 'cart';

export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading cart state:', err);
    return undefined;
  }
};

export const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving cart state:', err);
    throw err;
  }
};
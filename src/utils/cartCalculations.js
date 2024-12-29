export const calculateCartTotals = (items = []) => {
  const validItems = Array.isArray(items) ? items : [];
  
  return {
    items: validItems,
    itemCount: validItems.reduce((total, item) => total + (item?.quantity || 0), 0),
    total: validItems.reduce((sum, item) => sum + ((item?.price || 0) * (item?.quantity || 0)), 0)
  };
};
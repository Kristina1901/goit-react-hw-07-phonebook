export const getItems = state => state.items;

export const getFilter = state => state.filter;

export const getVisibleItems = state => {
  const items = getItems(state);
  const filter = getFilter(state);

  return items.filter(
    item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.number.includes(filter),
  );
};

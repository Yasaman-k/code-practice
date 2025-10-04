const products = [
  { id: 1, name: 'Apple iPhone 12', category: 'Electronics', price: 999 },
  {
    id: 2,
    name: 'Adidas running Air shoes',
    category: 'Sportswear',
    price: 280,
  },
  { id: 3, name: 'Samsung Galaxy S21', category: 'Electronics', price: 850 },
  { id: 3, name: 'Samsung Galaxy S21', category: 'Electronics', price: 300 },
  { id: 4, name: 'Nike Air Max', category: 'Sportswear', price: 300 },
];

const criteria = {
  categories: ['Sportswear', 'Electronics'],
  priceRange: { min: 100, max: 1000 },
  nameLength: { min: 15, max: null },
  keywords: ['Galaxy', 'Air'],
  sortBy: [
    { field: 'price', order: 'descending' },
    { field: 'name', order: 'descending' },
  ],
};

function filterAndSortProducts(products, criteria) {
  const { categories, priceRange, nameLength, keywords, sortBy } = criteria;
  const filtered = products.filter((product) => {
    return (
      filterByCategory(product.category, categories) &&
      filterByKeywords(product.name, keywords) &&
      filterByNameLength(product.name.length, nameLength) &&
      filterByPriceRange(product.price, priceRange)
    );
  });
  return sortData(filtered, sortBy);
}

function filterByCategory(data, filters) {
  return !filters || !filters.length > 0 || filters.includes(data);
}

const filterByKeywords = (data, filters) =>
  !filters || !filters.length > 0 || filters.some((filter) => data.includes(filter));
// data.search(filter) >= 0

const filterByNameLength = (data, filters) => {
  if (!filters || (!filters.min && !filters.max)) {
    return true;
  }
  const min = filters.min ?? 0;
  const max = filters.max ?? data;
  return max >= data && min <= data;
};

const filterByPriceRange = (data, filters = {}) => {
  if (!filters || (!filters.min && !filters.max)) {
    return true;
  }
  const min = filters.min ?? 0;
  const max = filters.max ?? data;
  return max >= data && min <= data;
};

const sortData = (data, sortBy = []) => {
  // ! !filters.length > 0 *** !filters.length *** filters.length === 0
  if (!sortBy || !sortBy.length) {
    return data;
  }
  return data.sort((a, b) => {
    // sortBy.forEach((sort) => {
    //   const { field, order } = sort;
    //   if (a[field] < b[field]) return order === 'ascending' ? -1 : 1;
    //   if (a[field] > b[field]) return order === 'ascending' ? 1 : -1;
    // });
    for (let i = 0; i < sortBy.length; i++) {
      const { field, order } = sortBy[i];
      if (a[field] < b[field]) return order === 'ascending' ? -1 : 1;
      if (a[field] > b[field]) return order === 'ascending' ? 1 : -1;
    }
  });
};

console.log(filterAndSortProducts(products, criteria));

module.exports = { filterAndSortProducts };

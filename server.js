const express = require("express");
const path = require("path");
const app = express();
const port = 5959;

const products = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
  { id: 2, name: 'Shirt', category: 'clothing', price: 50 },
  { id: 3, name: 'Phone', category: 'electronics', price: 800 },
  { id: 4, name: 'Jeans', category: 'clothing', price: 70 },
  { id: 5, name: 'Headphones', category: 'electronics', price: 150 },
];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/product', (req, res) => {
  const category = req.query.category || "all";
  const filterBy = req.query.filter || 'price';
  const order = req.query.order === 'desc' ? -1 : 1; // Default to ascending order

  let filteredProducts = category === 'all'
    ? products
    : products.filter(product => product.category === category);

  filteredProducts.sort((a, b) => {
    if (a[filterBy] < b[filterBy]) return -1 * order;
    if (a[filterBy] > b[filterBy]) return 1 * order;
    return 0;
  });

  console.log(filteredProducts);
  res.json(filteredProducts);
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
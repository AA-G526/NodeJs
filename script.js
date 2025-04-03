const resultDiv = document.querySelector("#result");
    
document.querySelector("#search-form").addEventListener('submit', async (e) => {
  e.preventDefault();

  const category = document.querySelector("#category").value;
  const filter = document.querySelector("#filter").value;
  const order = document.querySelector("#order").value;

  const url = `/product?category=${encodeURIComponent(category)}&filter=${encodeURIComponent(filter)}&order=${encodeURIComponent(order)}`;

  try {
    const response = await fetch(url);
    const products = await response.json();

    resultDiv.innerHTML = ''; // Clear previous results

    if (products.length === 0) {
      resultDiv.innerHTML = `<p>No product found.</p>`;
    } else {
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<strong>${product.name}</strong> - $${product.price} (${product.category})`;
        resultDiv.appendChild(productDiv);
      });
    }
  } catch (err) {
    console.error(err);
    resultDiv.innerHTML = `<p>An error occurred while fetching data.</p>`;
  }
});
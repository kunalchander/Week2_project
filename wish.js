// Get the product container and cart elements
const productsContainer = document.getElementById('products');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Create an empty cart array to store selected products
let cartItems = [];

// Add event listeners to the "Add to Cart" buttons
productsContainer.addEventListener('click', addToCart);

// Function to handle the "Add to Cart" button click event
function addToCart(event) {
  if (event.target.classList.contains('add-to-cart')) {
    const productId = event.target.dataset.id;
    const productElement = event.target.parentElement;
    const productName = productElement.querySelector('h3').textContent;
    const productPriceString = productElement.querySelector('p').textContent.replace('Price: $', '');
    const productPrice = parseFloat(productPriceString);

    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newProduct = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
      };
      cartItems.push(newProduct);
    }

    updateCartUI();
  }
}

// Function to update the cart UI
function updateCartUI() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.quantity}`;
    cartItemsContainer.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}
// GLOBAL selected products (shared across all pages)
let selectedProducts = JSON.parse(localStorage.getItem("selectedProducts")) || {};

// + / - on ANY product page
function changeQty(name, value) {
  if (!selectedProducts[name]) {
    selectedProducts[name] = 0;
  }

  selectedProducts[name] += value;

  if (selectedProducts[name] < 0) {
    selectedProducts[name] = 0;
  }

  document.getElementById(name).innerText = selectedProducts[name];
  localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
}

// Restore quantities when page loads
function restoreSelections() {
  for (let product in selectedProducts) {
    let el = document.getElementById(product);
    if (el) {
      el.innerText = selectedProducts[product];
    }
  }
}

// Add EVERYTHING to cart
function addSelectedToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  for (let item in selectedProducts) {
    let qty = selectedProducts[item];

    if (qty > 0) {
      let existing = cart.find(p => p.name === item);

      if (existing) {
        existing.quantity += qty;
      } else {
        cart.push({
          name: item,
          quantity: qty
        });
      }
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.removeItem("selectedProducts");
  window.location.href = "cart.html";
}

// Load cart page
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartDiv = document.getElementById("cartItems");
  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <div class="product">
        <p>${item.name}</p>
        <div class="counter">
          <button onclick="updateCart(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCart(${index}, 1)">+</button>
        </div>
      </div>
    `;
  });
}

// Update cart quantities
function updateCart(index, value) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity += value;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
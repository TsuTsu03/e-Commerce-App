function setActiveLink(clickedLink) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    clickedLink.classList.add("active");
  }

  function scrollToHome() {
    const element = document.getElementById("Home");
    const offset = element.offsetTop;
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }

  // Define products as an array of objects
let products = [
	{
		name: "Gucci ladies crossbag",
		price: 2500,
		image: "./Images/gucci1.avif",
		quantity: 5
	},
	{
		name: "Gucci Ladies Crossbag",
		price: 3000,
		image: "./Images/gucci2.avif",
		quantity: 3
	},
  {
		name: "Gucci Ladies Crossbag",
		price: 2400,
		image: "./Images/gucci3.avif",
		quantity: 3
	},
  {
		name: "Gucci white sneakers",
		price: 2000,
		image: "./Images/shoes1.avif",
		quantity: 3
	},
  {
		name: "Gucci black sneakers",
		price: 3000,
		image: "./Images/shoes2.avif",
		quantity: 3
	},
  {
		name: "Chanel Glittered Dress",
		price: 3500,
		image: "./Images/chanel1.webp",
		quantity: 3
	},
  {
		name: "Dior Tops",
		price: 2000,
		image: "./Images/dior1.avif",
		quantity: 3
	},
  {
		name: "Christian Dior White Dress",
		price: 4000,
		image: "./Images/guess4.avif",
		quantity: 3
	},
  {
		name: "Guess elegant Dress",
		price: 4000,
		image: "./Images/guess5.jpg",
		quantity: 3
	},
  {
		name: "Guess Black Office suit",
		price: 4500,
		image: "./Images/guess6.jpg",
		quantity: 3
	},
];

let productList = document.getElementById("product-list");


let productTemplate = document.getElementById("product-template");


for (let i = 0; i < products.length; i++) {
	let productElement = productTemplate.content.cloneNode(true);
	let productName = productElement.querySelector("h1");
  let productPrice = productElement.querySelector("h2");
	let productImage = productElement.querySelector("img");
	let productQuantity = productElement.querySelector("#quantity");
	productName.textContent = products[i].name;
  productPrice.textContent = products[i].price;
	productImage.src = products[i].image;
	productImage.alt = products[i].name;
	productQuantity.max = products[i].quantity;
	
	productList.appendChild(productElement);
}


const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const confirmation = confirm("Do you want to add this item to your cart?");
    if (confirmation) {
      const cartCount = document.querySelector('.cart-count');
      cartCount.textContent = parseInt(cartCount.textContent) + 1;
    }
  });
});


const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/flore/OneDrive/Documents/Tindahan/AgapeBoutique_ShoppingSection.html#ShopNow';
  });
});

function redirectToPage() {
  window.location.href = "file:///C:/Users/flore/OneDrive/Documents/Tindahan/AgapeBoutique_ShoppingSection.html#ShopNow";
}

const buyNowButtons = document.querySelectorAll('.buy-now');
const modal = document.getElementById("myModal");
const confirmButtons = document.querySelectorAll('.confirm-purchase');
const cancelButtons = document.querySelectorAll('.cancel-purchase');
const productName = document.querySelector('.product-name');
const productImage = document.querySelector('.product-image');
const productPrice = document.querySelector('.product-price');


// Loop through each Buy Now button and add the click event listener
buyNowButtons.forEach(function(buyNowButton) {
  buyNowButton.addEventListener('click', function() {
    modal.style.display = "block";
    const productName = this.dataset.productName;
    const product = products.find(p => p.name === productName);
    productNameElement.textContent = product.name;
    productImage.src = product.image;
    productPriceElement.textContent = `$${product.price}`;
  });
});

// Loop through each Close button and add the click event listener
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    modal.style.display = "none";
  });
});

// Loop through each Confirm Purchase button and add the click event listener
confirmButtons.forEach(function(confirmButton, index) {
  confirmButton.addEventListener('click', function() {
    alert("Purchase successful!");
    modals.style.display = "none";
  });
});

// Loop through each Cancel Purchase button and add the click event listener
cancelButtons.forEach(function(cancelButton) {
  cancelButton.addEventListener('click', function() {
    modal.style.display = "none";

  });
});







  
  
  
  
  
  
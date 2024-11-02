// script.js

// Product data array
const products = [
    { title: "Robot Model X", description: "High-tech model with AI capabilities.", imgSrc: "./Img/Rob x.jpg", price: "$999" },
    { title: "Robot Model Y", description: "Durable and efficient for household tasks.", imgSrc: "./Img/Rob y.jpg", price: "$799" },
    { title: "Robot Model Z", description: "Durable and efficient for household tasks.", imgSrc: "./Img/Rob z.jpg", price: "$699" },
    { title: "Armor Suit X", description: "Advanced protective armor.", imgSrc: "./Img/Arm x.jpg", price: "$1499" },
    { title: "Armor Suit Y", description: "Stylish and functional for everyday use.", imgSrc: "./Img/Arm y.jpg", price: "$1299" },
    { title: "Armor Suit Z", description: "Stylish and functional for everyday use.", imgSrc: "./Img/Arm z.jpg", price: "$1199" },
];

   
// Function to display products
function displayProducts(productArray) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear previous content

    productArray.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Add inline style for animation delay based on index
        productItem.style.animationDelay = `${index * 0.5}s`; // Adjust delay as needed

        productItem.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <div class="product-price">$199</div>
            <button class="order-button">Order Now</button>
        `;

        productGrid.appendChild(productItem);
    });
}



// Function to handle search
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

// Initial display of all products
displayProducts(products.slice(0, 3));

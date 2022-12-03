const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => product.price >= min && product.price <= max);
}

function getProductById(id) {
  return products.find((product) => id === product.id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}
function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (product) {
    const review = {
      rating,
      comment,
    };
    product.reviews.push(review);
    return review;
  }
}
module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};

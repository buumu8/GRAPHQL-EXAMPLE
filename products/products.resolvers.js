const { getAllProducts, getProductsByPrice, getProductById, addNewProduct, addNewProductReview } = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      const { id, description, price } = args;
      return addNewProduct(id, description, price);
    },
    addNewProductReview: (_, args) => {
      const { id, rating, comment } = args;
      return addNewProductReview(id, rating, comment);
    },
  },
};

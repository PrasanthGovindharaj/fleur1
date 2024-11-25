import React from "react";
import "./ProductsData.css";
import productImage1 from "../../../image/pngtree-an-asian-bride-holding-a-bouquet-of-flowers-picture-image_2482473.jpg"; // Update path as per your structure
import productImage2 from "../../../image/pngtree-image-of-a-beautiful-girl-with-flowers-on-a-dark-background-picture-image_2487740.jpg"; // Add correct paths for other images
import productImage3 from "../../../image/istockphoto-462861845-170667a.jpg";
import productImage4 from "../../../image/h1-slide-2-img-2.png";

const products = [
  {
    id: 1,
    name: "AUTUMN BOUQUET",
    price: "$375",
    image: productImage1,
  },
  {
    id: 2,
    name: "COZY ARMCHAIR",
    price: "$945",
    image: productImage2,
  },
  {
    id: 3,
    name: "FOREST FAIRY",
    price: "$188",
    image: productImage3,
  },
  {
    id: 4,
    name: "LACED DRESS",
    price: "$2,590",
    image: productImage4,
  },
];

const ProductsData = () => {
  return (
    <section className="productsData">
      <div className="container">
        <h2 className="title">RECOMMENDED PRODUCTS</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur gravida nibh vel velit auctor
          aliquet. Aenean sollicitudin lorem quis bibendum.
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">ADD TO CART</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsData;

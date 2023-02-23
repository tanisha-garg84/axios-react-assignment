import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductById = async (params) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${params}`);
      setProducts([response.data]);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    } else {
      fetchProducts();
    }
  }, [id]);

  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.thumbnail} alt="ProductImage" />
          <h2 className="title">{product.brand}</h2>
          <p className="body">{product.description}</p>
         <div className="footer">
         <span><p>${product.price}</p></span>
          <p >⭐{product.rating}</p>
          </div>
          <button onClick={() => navigate(`/${product.id}`)}>BUY NOW</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

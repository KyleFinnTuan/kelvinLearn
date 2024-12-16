import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ProductPost = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(data);
      setProduct(data);
    })();
  }, []);

  return (
    <div className="flex gap-8">
      <img className="w-64" src={product.image}></img>
      <div className="flex flex-col">
        <p>{product.category}</p>
        <h1 className="text-5xl font-bold">{product.title}</h1>
        <p className="text-6xl font-semibold">${product.price}</p>
        <div className="mt-4">
          <p> rate {product.rating?.rate}★</p>
          <p> by {product.rating?.count} people</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPost;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../components/ProductCard";
import { addToCart } from "../../../services/store/cartSlice";
import { fetchProducts } from "../../../services/store/productSlice";
import "./style.css";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="productList">
      {products?.map((product) => (
        <div key={product.id}>
          <ProductCard
            product={product}
            onClickHandler={() => addToCartHandler(product)}
            buttonText="Add to Cart"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;

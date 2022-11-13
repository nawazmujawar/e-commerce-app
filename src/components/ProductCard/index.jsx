import React from "react";
import "./style.css";

function ProductCard(props) {
  const { product, onClickHandler, buttonText } = props;
  const { title, price } = product;

  return (
    <div className="productCard__container">
      <h3>{title}</h3>
      <p style={{ fontSize: "2rem" }}>$ {price}</p>
      <button onClick={onClickHandler} className="productCard__btn">
        {buttonText}
      </button>
    </div>
  );
}

export default ProductCard;

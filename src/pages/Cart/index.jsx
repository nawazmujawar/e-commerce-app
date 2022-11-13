import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { removeItem } from "../../services/store/cartSlice";
import "./style.css";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const removeItemHandler = (productId) => {
    dispatch(removeItem(productId));
  };

  const cartTotalPrice = items.reduce((acc, cur) => (acc += cur.price), 0);

  return (
    <div className="cart__container">
      <div>
        {items.length > 0 ? (
          items?.map((item) => (
            <div key={item.id} style={{ margin: "20px" }}>
              <ProductCard
                product={item}
                onClickHandler={() => removeItemHandler(item.id)}
                buttonText="Remove"
              />
            </div>
          ))
        ) : (
          <p style={{ fontSize: "2rem", color: "gray" }}>
            Nothing found in cart ...
          </p>
        )}
      </div>
      <div className="cart__checkout">
        <h3>Total Price</h3>
        <p>${Math.floor(cartTotalPrice)}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

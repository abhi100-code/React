import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          <ul>
            {state.cart.map((item) => (
              <li key={item.id}>
                {item.name}

                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item.id,
                    })
                  }
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() =>
              dispatch({
                type: "CLEAR_CART",
              })
            }
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
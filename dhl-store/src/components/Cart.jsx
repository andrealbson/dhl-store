import React, { Component } from "react";
import formatCurrency from "./../util";
import { Fade } from "react-reveal";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart
          </div>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div className="right">
                        {formatCurrency(item.price)} x {item.count}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  TOTAL:
                  {formatCurrency(
                    cartItems.reduce(
                      (acc, item) => acc + item.price * item.count,
                      0
                    )
                  )}
                </div>
                <button className="button primary">Pagar Agora</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

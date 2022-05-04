import React, { Component } from "react";
import formatCurrency from "./../util";
import { Fade } from "react-reveal";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="card">
        {cartItems.length === 0 ? (
          <div className="cart cart-header text-muted">
            <i className="bi bi-cart text-danger"></i> &nbsp;Carrinho está vazio
            por enquanto
          </div>
        ) : (
          <div className="cart cart-header">
            <i className="bi bi-cart-fill text-danger"></i>&nbsp;Itens no meu
            carrinho:&nbsp;
            <span className="badge bg-danger" id="qtd-cart">
              {cartItems.length}
            </span>
            &nbsp;
          </div>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div>
                      <img
                        src={item.attributes.link_image}
                        alt={item.attributes.title}
                      ></img>
                    </div>
                    <div>
                      <div>{item.attributes.title}</div>
                      <div className="right">
                        {formatCurrency(item.attributes.price)} x {item.count}
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
                      (acc, item) => acc + item.attributes.price * item.count,
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

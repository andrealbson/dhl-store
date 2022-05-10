import React, { Component } from "react";
import formatCurrency from "../../util";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../babel.config.js";
import "../../babel-plugin-macros.config.js";

library.add(fas);

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
                    <div className="img-cart-items-list">
                      <img
                        src={item.attributes.link_image}
                        alt={item.attributes.title}
                      ></img>
                    </div>
                    <div>
                      <div className="cart-items-list-title">
                        {item.attributes.title}
                      </div>
                      <div className="right">
                        {formatCurrency(item.attributes.price)} x {item.count}
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          <FontAwesomeIcon icon="fa-solid fa-xmark" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div className="cart cart-total">
              <div className="total">
                <div>
                  <span className="cart-total-title">TOTAL: </span>
                  <span className="cart-total-value">
                    {formatCurrency(
                      cartItems.reduce(
                        (acc, item) => acc + item.attributes.price * item.count,
                        0
                      )
                    )}
                  </span>
                </div>
              </div>
              <div>
                <Link to="/checkout">
                  <button className="button primary btn-pay-now">
                    Pagar Agora
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

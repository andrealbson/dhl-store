import React, { Component } from "react";
import formatCurrency from "../../util";
import { Fade, Zoom } from "react-reveal";
import Modal from "react-modal/lib/components/Modal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../babel.config.js";
import "../../babel-plugin-macros.config.js";


library.add(fas);
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product.id} className="">
                <div className="ribbon">
                  {Math.random().toFixed(1) * (10 - 0) >= 7 && (
                    <div className="wrap">
                      <span className="ribbon-ultimas">Últimas unidades</span>
                    </div>
                  )}
                </div>
                <div className="product">
                  <a
                    href={"/#" + product.id}
                    onClick={() => this.openModal(product)}
                  >
                    <div className="content-image-product">
                      <div>
                        <img
                          src={product.attributes.link_image}
                          alt={product.attributes.title}
                        />
                      </div>
                    </div>
                    <div className="content-title-product">
                      <div>{product.attributes.title}</div>
                    </div>
                    <div className="content-description-product">
                      <div>{product.attributes.description}</div>
                    </div>
                    <div className="content-rating-spins-product">
                      <div>
                      <FontAwesomeIcon icon="fa-solid fa-star" />
                      <FontAwesomeIcon icon="fa-solid fa-star" />
                      <FontAwesomeIcon icon="fa-solid fa-star" />
                      <FontAwesomeIcon icon="fa-solid fa-star" />
                      <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
                      </div>
                      <div className="">
                        <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" />
                        &nbsp;APENAS HOJE!
                      </div>
                    </div>
                    <div className="content-oldprice-product">
                      <div>
                        <div className="old-price">
                          <span>
                            {formatCurrency(product.attributes.price)}
                          </span>
                        </div>
                      </div>
                      <div className="promotional-badge">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-trend-down" />
                        &nbsp;
                        {Math.random().toFixed(1) * (20 - 0)}% OFF
                      </div>
                    </div>
                  </a>
                  <div className="product-price">
                    <div className="text-price">
                      {formatCurrency(product.attributes.price_promotional)}
                    </div>
                    <div></div>
                  </div>
                  <div className="dividers-pay">
                    <span className="text-muted">6x de R$ 0,00 s/juros</span>
                  </div>
                  <div className="footer-card">
                    <div>
                      <button
                        className=""
                      >
                        <FontAwesomeIcon icon="fa-solid fa-eye" />
                      </button>
                    </div>
                    <div>
                      <button
                        className=""
                      >
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className=""
                      >
                        <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true}>
            <Zoom>
              <button className="close-modal btn btn-sm btn-danger" onClick={this.closeModal}>
              <i className="fa-solid fa-xmark fa-lg"></i>
              </button>
              <div className="product-details">
                <img
                  src={product.attributes.link_image}
                  alt={product.attributes.title}
                />
                <div className="product-details-description">
                  <h4 className="">{product.attributes.title}</h4>
                  <p className="description-product text-muted">{product.attributes.description}</p>
                  <hr />
                  <p className="product-price">
                    <div className="text-price-modal">{formatCurrency(product.attributes.price)}</div>
                    <button
                      className="btn btn-success"
                      onClick={(e) => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      <i className="fa-solid fa-cart-plus fa-lg"></i>&nbsp;Adicionar ao carrinho
                    </button>
                  </p>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

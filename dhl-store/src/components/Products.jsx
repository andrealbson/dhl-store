import React, { Component } from "react";
import formatCurrency from "./../util";
import { Fade, Zoom } from "react-reveal";
import Modal from "react-modal/lib/components/Modal";
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
                <div className="product">
                  <a
                    href={"#" + product.id}
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
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.attributes.price)}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                Fechar
              </button>
              <div className="product-details">
                <img
                  src={product.attributes.link_image}
                  alt={product.attributes.title}
                />
                <div className="product-details-description">
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.description}</p>
                  <hr />
                  <p className="product-price">
                    <div>{formatCurrency(product.attributes.price)}</div>
                    <button
                      className="button primary"
                      onClick={(e) => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Adicionar ao carrinho
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

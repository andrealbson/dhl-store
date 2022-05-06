import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Checkout/style.scss";
import formatCurrency from "../../util";

export default class Checkout extends Component {

  constructor() {
    super();
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cartItems")),
    };
  }

  render() {
    const { cartItems } = this.props;
    setInterval(function () {
      document.getElementById("count-cart").innerHTML =
        "" +
        Object.values(JSON.parse(localStorage.getItem("cartItems"))).flat()
          .length +
        "";
    }, 500);

    return (
      <>
        <div className="breadcrumb" style={{marginTop: "-59px"}}>
          <Link to="/home" className="breadcrumb__step">
            Página Inicial
          </Link>
          <Link className="breadcrumb__step breadcrumb__step--active" to="/checkout">
            Checkout
          </Link>
          <Link
            to="/checkoutSuccess"
            className="breadcrumb__step"
          >
            confirmado de Compra
          </Link>
        </div>
        <div className="container rounded bg-white">
          <div className="row d-flex justify-content-center pb-5">
            <div className="col-sm-5 col-md-5 ml-1">
              <div className="py-4 d-flex flex-row">
                <h5>
                  <span className="fa fa-check-square-o"></span>
                  <b>DHL ECOMMERCE</b> |{" "}
                </h5>
                <span className="pl-2">Pay</span>
              </div>
              <h4 className="green">
              {formatCurrency(
                      cartItems.reduce(
                        (acc, item) => acc + item.attributes.price * item.count,
                        0
                      )
                    )}
              </h4>
              <hr />
              <h4 className="text-dark">Instruções de Frete & Pagamento</h4>
              <div className="d-flex pt-2">
                <div>
                  <p>
                    <b>Frete padrão:</b>
                    <br /> 
                    <span className="green">R$ 71,60</span>
                    <span>Total: {this.state.cartItems.length}</span>
                  </p>
                </div>
              </div>
              <p>
                Entrega padrão, com prazo de entrega ao seu destino entre 15 a
                20 dias úteis com rastreamento do seu pedido.
              </p>
              <div className="rounded bg-light d-flex">
                <div className="p-2">
                  <strong className="text-muted">15 à 20 dias uteis</strong>
                </div>
              </div>
              <hr />
              <div className="pt-2">
                <div className="d-flex">
                  <div>
                    <p>
                      <b>Frete SEDEX:</b>
                      <br />
                      <span className="green">R$ 93,99</span>
                    </p>
                  </div>
                </div>
                <p>
                  Entrega rápida, com prazo de entrega ao seu destino entre 5 à
                  7 dias úteis com rastreamento do seu pedido.
                </p>
                <hr />
                <h5>Seleciona o método de pagamento:</h5>
                <form className="pb-3 bg-light">
                  <div className="d-flex flex-row align-content-center">
                    <div className="pt-2 pr-2">
                      <input type="radio" name="radio1" id="r1" checked />
                    </div>
                    <div className="rounded border d-flex w-100 px-2">
                      <div className="pt-2">
                        <p>
                          <i className="fa fa-cc-visa text-primary pr-2 fa-lg"></i>
                          &nbsp;Visa Débito Card
                        </p>
                      </div>
                      <div className="ml-auto pt-2">************3456</div>
                    </div>
                  </div>
                </form>
                <form className="pb-3">
                  <div className="d-flex flex-row w-100">
                    <div className="pt-2 pr-2">
                      <input type="radio" name="radio1" id="r2" />
                    </div>
                    <div className="rounded  d-flex w-100 px-2">
                      <div className="pt-2">
                        <p>
                          <i className="fa fa-cc-mastercard fa-lg pr-2"></i>
                          &nbsp;Mastercard Office
                        </p>
                      </div>
                      <div className="ml-auto pt-2">************1038</div>
                    </div>
                  </div>
                </form>
                <div className="d-grid gap-2">
                  <Link
                    to="/checkoutSuccess"
                    className="btn btn-primary btn-success"
                  >
                    <i className="bi bi-bag-check"></i>&nbsp;Finalizar Compra
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-4 offset-md-1 mobile">
              <div className="py-4 d-flex justify-content-end">
                <h6>
                  <Link
                    to="/"
                    className="btn btn-sm btn-danger btn-cancelar-top-checkout"
                  >
                    <i className="fa-solid fa-arrow-left"></i>&nbsp;Cancelar e
                    voltar para a página inicial
                  </Link>
                </h6>
              </div>
              <div className="bg-light rounded d-flex flex-column content-order-checkout">
                <div className="p-2 ml-3">
                  <h4 className="text-center">Resumo do pedido</h4>
                </div>
                <hr style={{ marginTop: "-0em", backgroundColor: "#a0a0a0" }} />
                <div className="p-2 d-flex">
                  <div className="col-8">Contracted Price</div>
                  <div className="ml-auto">$186.76</div>
                </div>
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
                        {formatCurrency(item.attributes.price)}&nbsp; <span className="badge bg-danger">x{item.count}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
                
                <div className="border-top px-4 mx-3"></div>
                <div className="p-2 d-flex pt-3">
                  <div className="col-8">Valor Total de Produtos:</div>
                  <div className="ml-auto">
                    <b>{formatCurrency(
                      cartItems.reduce(
                        (acc, item) => acc + item.attributes.price * item.count,
                        0
                      )
                    )}</b>
                  </div>
                </div>
                <div className="p-2 d-flex">
                  <div className="col-8">
                    Frete: <span className="text-primary fw-bold">PADRÃO</span>{" "}
                    <span className="fa fa-question-circle text-secondary"></span>
                  </div>
                  <div className="ml-auto">
                    <b>R$ 71.60</b>
                  </div>
                </div>
                <div className="border-top px-4 mx-3"></div>
                <div className="p-2 d-flex pt-3">
                  <div className="col-8">
                    <b>TOTAL:</b>
                  </div>
                  <div className="ml-auto">
                    <b className="green">
                    {formatCurrency(
                      cartItems.reduce(
                        (acc, item) => acc + item.attributes.price * item.count,
                        0
                      ) + 71.60
                    )}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

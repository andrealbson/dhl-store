import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../EmptyCart/style.scss";
import imageEmpryCart from "../../images/empty.png";
import { Alert, Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../babel.config.js";
import "../../babel-plugin-macros.config.js";

library.add(fas);

export default class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cartItems")),
    };
  }

  render() {
    return (
      <>
        <div className="breadcrumb" style={{ marginTop: "-59px" }}>
          <Link to="/home" className="breadcrumb__step">
            Página Inicial
          </Link>
          <Link
            className="breadcrumb__step breadcrumb__step--active"
            to="/checkout"
          >
            Carrinho Vazio
          </Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Alert variant="secondary">
                <Alert.Heading>
                  Ops, o seu carrinho está vazio! &nbsp;
                  <Button variant="secondary" size="sm">
                    <Link
                      className="text-light"
                      to="/home"
                      style={{ textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-house" className="text-warning" />
                      &nbsp;
                      Voltar para a página inicial
                    </Link>
                  </Button>
                </Alert.Heading>
                <p>
                  Você deve primeiro adicionar produtos ao seu carrinho para que
                  o mesmo seja possível finalizar a compra.
                </p>
                <hr />
                <small className="mb-0">
                  Se você tem alguma dúvida, entre em contato com a nossa equipe
                  de suporte clicando neste link:
                  <Link to="/#" style={{ textDecoration: "none" }}>
                    <strong className="text-primary text-link">
                      &nbsp;Suporte&nbsp;
                      <FontAwesomeIcon icon="fa-solid fa-circle-question" />
                    </strong>
                  </Link>
                </small>
              </Alert>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <img
                className="img-fluid imagem-empty"
                src={imageEmpryCart}
                alt="Empty Cart"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

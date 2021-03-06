import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../../images/logo-andre-oficial.png";
import "../NavBar/style.scss";
import formatCurrency from "../../util";
import { Nav, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../babel.config.js";
import "../../babel-plugin-macros.config.js";

library.add(fas);

export default class Header extends Component {
  render() {
    const { cartItems } = this.props;
    window.scrollTo(0, 0);

    return (
      <>
        <header className="bg-light shadow-sm fixed-top">
          <div className="bar-top">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center suporte">
                  <i className="bi bi-headset"></i>
                  <span className="font-size-14 font-book">
                    &nbsp;&nbsp;Suporte
                  </span>
                  <strong className="font-book">
                    &nbsp;
                    <a href="tel:81998994052" className="fone font-book">
                      (81) 9 9899-4052
                    </a>
                  </strong>
                </div>
                <div className="col-md-4 text-center font-size-14 font-book second-item">
                  algum texto aqui
                </div>
                <div className="col-md-4 text-center rastreamento">
                  <i className="bi bi-pin-map-fill"></i>
                  &nbsp;{" "}
                  <span className="font-size-14 font-book">
                    Rastreamento de pedidos
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="content-search-info">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 mt-4">
                  <figure className="logo">
                    <img src={Logo} alt="Logo" />
                  </figure>
                </div>
                <div className="col-md-6  mt-4">
                  <Form className="form-inline">
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Busque por qualquer produto..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        <i className="bi bi-search"></i>
                      </Button>
                    </InputGroup>
                  </Form>
                </div>
                <div className="col-md-3  mt-4">
                  <div className="content-cart-favorites">
                    <div className="content-icons">
                      <a href="/#">
                        <i className="bi bi-bag-heart-fill icon-toggle"></i>
                        <span className="badge-count">0</span>
                      </a>
                    </div>
                    <div className="content-icons">
                      <Link to="/login">
                        <div className="flex-content-user">
                          <div>
                            <i className="bi bi-person icon-toggle"></i>
                          </div>
                          <div>
                            <div className="flex-column-user">
                              <div>Ol??, Entre em</div>
                              <div>Sua Conta</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="content-icons">
                      <Link
                        to={
                          this.props.cartItems.length > 0
                            ? "/checkout"
                            : "/emptyCart"
                        }
                      >
                        <a href="/">
                          <div className="flex-content-cart">
                            <div>
                              <i className="bi bi-cart3 icon-toggle"></i>
                              <span className="badge-count cart">
                                {cartItems.length}
                              </span>
                            </div>
                            <div>
                              <div className="flex-column-cart">
                                <div className="cart-title-navbar">
                                  Carrinho
                                </div>
                                <div className="total-cart-navbar">
                                  {formatCurrency(
                                    cartItems.reduce(
                                      (acc, item) =>
                                        acc +
                                        item.attributes.price * item.count,
                                      0
                                    )
                                  ).substring(3)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container-fluid content-menu">
              <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li"></Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-1"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-baby-carriage"
                      size="lg"
                    />
                    Infantil
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-1"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-spray-can-sparkles"
                      size="lg"
                    />
                    Beleza e Sa??de
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-1"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-kitchen-set" size="lg" />
                    Eletroport??teis
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-2"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-fire-burner" size="lg" />
                    Eletrodom??sticos
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-3"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-gamepad" size="lg" />
                    Eletr??nicos
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-5"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-baseball-bat-ball"
                      size="lg"
                    />
                    Esporte & Lazer
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-6"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-computer" size="lg" />
                    Inform??tica
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-7"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-couch" size="lg" />
                    M??veis
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    eventKey="link-8"
                    className="font-size-16 font-book"
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-mobile-screen-button"
                      size="lg"
                    />
                    Telefonia
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Success/style.scss";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CheckOutSuccess extends Component {
  render() {
    setInterval(function () {
      document.getElementById("count-cart").innerHTML =
        "" +
        Object.values(JSON.parse(localStorage.getItem("cartItems"))).flat()
          .length +
        "";
    }, 500);

    return (
      <>
        <div className="content-success">
          <div className="breadcrumb">
            <Link to="/home" className="breadcrumb__step">
              Página Inicial
            </Link>
            <Link className="breadcrumb__step" to="/checkout">
              Checkout
            </Link>
            <Link
              to="/checkoutSuccess"
              className="breadcrumb__step breadcrumb__step--active"
            >
              confirmado de Compra
            </Link>
          </div>
          <div className="container mt-4 d-flex justify-content-center">
            <div className="row g-0">
              <div className="col-md-12">
                <Alert variant="success">
                  <i className="fa-solid fa-circle-check fa-6x icone-success"></i>
                  <Alert.Heading>O seu pagamento foi confirmado!</Alert.Heading>
                  <p>
                    Obrigado por comprar conosco. Iremos preparar o seu pedido e
                    enviá-lo para o seu endereço de entrega.
                    <br />
                    Não se preocupe, iremos te avisar quando o seu pedido
                    estiver pronto para ser enviado.
                  </p>
                  <p>
                    <strong className="bg-light p-2">
                      Você pode verificar o status do seu pedido em sua conta.
                    </strong>
                  </p>
                  <hr />
                  <p className="mb-0">
                    Sempre que precisar, estaremos a sua disposição para
                    qualquer dúvida que você tiver.
                  </p>
                </Alert>
              </div>
              <div className="col-md-4 border-right">
                <div className="cards">
                  <div className="first bg-white p-4 text-center">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/box.png"
                      alt=""
                    />

                    <h5>Suporte 24h</h5>
                    <p className="line1">
                      Se você tiver com alguma dúvida, entre em contato com
                      nosso suporte. Será um prazer esclarecer todas as suas
                      dúvidas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 border-right">
                <div className="cards">
                  <div className=" second bg-white p-4 text-center">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/groups.png"
                      alt=""
                    />

                    <h5>Mais de 50 mil entregas feitas</h5>
                    <p className="line2">
                      Fique tranquilo, nosso ambiente é seguro e confiável. Nós
                      entregamos em todo o Brasil.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="cards">
                  <div className=" third bg-white p-4 text-center">
                    <img
                      src="https://img.icons8.com/fluent/100/000000/trophy.png"
                      alt=""
                    />
                    <h5>Reconhecimento de Qualidade</h5>
                    <p className="line3">
                      Nossos produtos são 100% de qualidade e são fabricados por
                      empresas de alta qualidade e confiabilidade.
                    </p>
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

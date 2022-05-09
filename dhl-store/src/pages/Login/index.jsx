import React from "react";
import { Link } from "react-router-dom";
import "../../pages/Login/login.scss";
import "../../pages/Login/styled.js";
import { useState } from "react";
import imgLogin from "../../images/login.svg";
import imgCadastro from "../../images/cadastro.svg";
import { Field, Form, Formik } from "formik";
import shcema from "../../shcema";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { t } from "i18next";

const errorMsg = (msg) => {
  swal("Erro", t(msg), "error");
};

const Page = () => {
  const [isActive, setActive] = useState(false);
  const { t } = useTranslation();

  const toggleClass = () => {
    setActive(!isActive);
  };

  function onSubmt(values, actions) {
    console.log("SUBMIT: ", values);
  }

  return (
    <Formik
      validationSchema={shcema}
      onSubmt={onSubmt}
      initialValues={{
        email: "",
        senha: "",
      }}
      render={({ values, errors, touched, isValid }) => (
        <div className="login">
          <div
            className={isActive ? "container sign-up-mode" : "container"}
            style={{ marginLeft: 0 }}
          >
            <div className="forms-container">
              <div className="signin-signup">
                <Form className="sign-in-form">
                  <h2 className="title">Entrar</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
                      name="email"
                      type="text"
                      placeholder="E-mail"
                      onBlur={() =>
                        errors.email ? errorMsg(errors.email) : ""
                      }
                    />
                    {errors.email ? (
                      <div className="error-message">{t(errors.email)}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
                      name="senha"
                      type="password"
                      placeholder="Senha"
                      onBlur={() =>
                        errors.senha ? errorMsg(errors.senha) : ""
                      }
                    />
                    {errors.senha ? (
                      <div className="error-message">{t(errors.senha)}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    className="btn solid"
                    disabled={!isValid}
                  />
                  <p className="social-text">
                    Ou Faça login com plataformas sociais
                  </p>
                  <div className="social-media">
                    <a href="/#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/#" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </Form>
                <Form className="sign-up-form">
                  <h2 className="title">Criar minha Conta</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Seu nome completo" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Senha" />
                  </div>
                  <input type="submit" className="btn" value="Criar conta" />
                  <p className="social-text text-muted">
                    <small>
                      Ou use suas redes sociais para criar sua conta
                    </small>
                  </p>
                  <div className="social-media">
                    <a href="/#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/#" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="/#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </Form>
              </div>
            </div>

            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <div className="flex-btn-cad">
                    <div>
                      <h3>Novo por aqui?</h3>
                    </div>
                    <div>
                      <button
                        className="btn transparent mt-3 mb-2"
                        onClick={toggleClass}
                        id="sign-up-btn"
                      >
                        Cadastre-se
                      </button>
                    </div>
                  </div>
                  <p>
                    <small>
                      Ao criar sua conta, você estará concordando com os nossos{" "}
                      <br />
                      <a href="/#" className="text-white">
                        Termos de uso
                      </a>
                      &nbsp; e &nbsp;
                      <a href="/#" className="text-white">
                        Política de Privacidade
                      </a>
                      .
                    </small>
                    <div className="content-btn-back-to-store">
                      <hr />
                      <h6>
                        <Link
                          to="/home"
                          className="btn transparent"
                          style={{ background: "#fff", color: "#ff4959" }}
                        >
                          Voltar a Loja
                        </Link>
                      </h6>
                    </div>
                  </p>
                </div>

                <img src={imgLogin} className="image" alt="" />
              </div>
              <div className="panel right-panel">
                <div className="content">
                  <h3>Já tem uma conta?</h3>
                  <p>
                    Se você já tem uma conta, então você pode entrar com seu{" "}
                    <br /> <strong>e-mail</strong> e <strong>senha</strong>{" "}
                    clicando no botão <strong>ENTRAR</strong> abaixo.
                  </p>
                  <button
                    className="btn transparent"
                    id="sign-in-btn"
                    onClick={toggleClass}
                  >
                    Entrar
                  </button>
                </div>
                <img src={imgCadastro} className="image cadastro" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Page;

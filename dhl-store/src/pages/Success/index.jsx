import React, { Component } from "react";
import CheckOutSuccess from "../../components/Success";
import Header from "../../components/NavBar/Navbar";

class Success extends Component {
  state = {
    products: [],
  };

  constructor() {
    super();
    this.state = {
      products: this.state.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: "",
      sort: "",
    };
  }

  render() {
    const mystyle = {
      marginTop: "14em",
    };
    return (
      <>
        <Header />
        <div className="content-success" style={mystyle}>
          <CheckOutSuccess />
        </div>
      </>
    );
  }
}

export default Success;

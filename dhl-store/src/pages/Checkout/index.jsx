import React, { Component } from "react";
import CheckOut from "../../components/Checkout/index.jsx";
import Header from "../../components/NavBar/Navbar";

class Checkout extends Component {
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
      marginTop: "10em",
    };
    return (
      <>
        <Header cartItems={this.state.cartItems}/>
        <div className="content-checkout" style={mystyle}>
          <CheckOut
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </>
    );
  }
}

export default Checkout;

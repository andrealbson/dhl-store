import React, { Component } from "react";
import Emptycart from "../../components/EmptyCart/index.jsx";
import Header from "../../components/NavBar/Navbar";

class EmptyCart extends Component {
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
          <Emptycart
            cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
          />
        </div>
      </>
    );
  }
}

export default EmptyCart;

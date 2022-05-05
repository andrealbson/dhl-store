import React, { Component } from "react";
import SlideCarousel from "../../../components/Carousel";
import Cart from "../../../components/Home/Cart";
import Products from "../../../components/Home/Products";
import Header from "../../../components/NavBar/Navbar";
import Filter from "./../../../components/Home/Filter";
import api from './../../../services/api';

class Home extends Component {

    state = {
        products: [],
      };
    
      async componentDidMount() {
        const response = await api.get("/products");
        this.setState({ products: response.data.data });
      }
    
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
    
      removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
          cartItems: cartItems.filter((item) => item.id !== product.id),
        });
        localStorage.setItem(
          "cartItems",
          JSON.stringify(cartItems.filter((item) => item.id !== product.id))
        );
      };
    
      addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
          if (item.id === product.id) {
            item.count++;
            alreadyInCart = true;
          }
        });
        if (!alreadyInCart) {
          cartItems.push({ ...product, count: 1 });
        }
        this.setState({ cartItems });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      };
    
      sortProducts = (event) => {
        const sort = event.target.value;
        this.setState((state) => ({
          sort: sort,
          products: this.state.products
            .slice()
            .sort((a, b) =>
              sort === "lowest"
                ? a.attributes.price > b.attributes.price
                  ? 1
                  : -1
                : sort === "highest"
                ? a.attributes.price < b.attributes.price
                  ? 1
                  : -1
                : a.attributes.id < b.attributes.id
                ? 1
                : -1
            ),
        }));
      };
    
      filterProducts = (event) => {
        if (event.target.value === "") {
          this.setState({
            size: event.target.value,
            products: this.state.products,
          });
        } else {
          this.setState({
            size: event.target.value,
            products: this.state.products.filter(
              (product) => product.id.indexOf(event.target.value) >= 0
            ),
          });
        }
      };

  render() {
    return (
      <>
        <Header />
        <SlideCarousel />
        <div className="grid-container">
          <main>
            <div className="content">
              <div className="main">
                <Filter
                  count={this.state.products.length}
                  sort={this.state.sort}
                  filterProducts={this.filterProducts}
                  sortProducts={this.sortProducts}
                />
                <Products
                  products={this.state.products}
                  addToCart={this.addToCart}
                />
              </div>
              <div className="sidebar">
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                />
              </div>
            </div>
          </main>
          <footer>Todos os direitos reservados</footer>
        </div>
      </>
    );
  }
}

export default Home;

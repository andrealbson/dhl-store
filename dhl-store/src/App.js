import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/index.jsx";
import Home from "./pages/Home/index.jsx";
import Checkout from "./pages/Checkout/index.jsx";
import Success from "./pages/Success/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/checkoutSuccess" element={<Success />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;

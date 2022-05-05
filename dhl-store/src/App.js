import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login/index.jsx";
import Home from "./pages/Login/Home/index.jsx";

class App extends React.Component {
  

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;

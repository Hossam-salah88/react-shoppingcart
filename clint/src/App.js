import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="layout">
          <Header />
          <main>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/order" element={<Order />} exact />
            </Routes>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

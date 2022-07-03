import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products />
            <div className="wrapper__filter">
              <Filter />
            </div>
          </div>
          <Cart />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

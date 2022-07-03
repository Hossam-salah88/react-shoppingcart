import React from "react";
import Cart from "../components/Cart/Cart";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <Products />
        <div className="wrapper__filter">
          <Filter />
        </div>
      </div>
      <Cart />
    </>
  );
};

export default Home;

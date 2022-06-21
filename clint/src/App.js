import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { statictext } from "./statictext";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cardItem")) || []
  );

  const handelSizeFilter = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let productClone = [...data];
      let newProducts = productClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
    }
  };

  const handelSortFilter = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order === "lower") {
        return a.price - b.price;
      } else if (order === "highest") {
        return b.price - a.price;
      } else if (order === "lastes") {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  const addToCart = (product) => {
    const cardItemsClone = [...cartItem];
    let isProductExist = false;
    cardItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;

        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cardItemsClone.push({ ...product, qty: 1 });
    }
    setCartItem(cardItemsClone);
  };

  const removeproduct = (product) => {
    const cardItemsClone = [...cartItem];
    setCartItem(cardItemsClone.filter((p) => p.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem("cardItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />
          <div className="wrapper__filter">
            <Filter
              handelSizeFilter={handelSizeFilter}
              handelSortFilter={handelSortFilter}
              size={size}
              sort={sort}
              products={products}
            />
          </div>
        </div>
        <Cart cartItem={cartItem} removeproduct={removeproduct} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { statictext } from "./statictext";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const handelSizeFilter = (e) => {
    setSize(e.target.value);
    if (e.target.value === "ALL") {
      setProducts(data);
    } else {
      let productClone = [...products];
      let newProducts = productClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
      console.log(newProducts);
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

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <div className="wrapper__filter">
            <Filter
              handelSizeFilter={handelSizeFilter}
              handelSortFilter={handelSortFilter}
              size={size}
              sort={sort}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

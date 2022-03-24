import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  let [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState(productList);
  //start pull data, happened just one time.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((newList) => {
        setProductList(newList);
        setFilteredList(newList);
      });
  }, []);
  const categories = productList
    .map((product) => product.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const filterByCategory = (option) => {
    setFilteredList(
      productList.filter((product) => product.category === option),
    );
  };

  return (
    <div className="App">
      <Header categories={categories} onFilter={filterByCategory} />
      <Products
        filteredList={filteredList}
        productList={productList}
        setProductList={setProductList}
      />
    </div>
  );
}

export default App;

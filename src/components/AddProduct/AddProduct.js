import { useState } from "react";
import "./AddProduct.css";

function AddProduct({ productList, setProductList }) {
  let newProductName = "";
  let newProductPrice = "";
  let newProductDescription = "";
  return (
    <div className="addProduct">
      <h4>Add new product:</h4>
      <div>
        <input
          type="text"
          placeholder="Product name"
          onChange={(e) => {
            newProductName = e.target.value;
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Product price"
          onChange={(e) => {
            newProductPrice = e.target.value;
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Product description"
          onChange={(e) => {
            newProductDescription = e.target.value;
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setProductList([
              ...productList,
              {
                id: productList.length + 1,
                title: newProductName,
                price: newProductPrice,
                description: newProductDescription,
                category: "men's clothing",
                image:
                  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                rating: { rate: null, count: 0 },
              },
            ]);
          }}
        >
          Add new product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;

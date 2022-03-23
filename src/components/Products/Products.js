import Product from "../Product/Product";
import "./Products.css";

let newProductName = "";
let newProductPrice = "";
let newProductDescription = "";
function Products({ productList, setProductList }) {
  return (
    <div className="ProductList">
      <input
        type="text"
        abel="Product name"
        onChange={(e) => {
          newProductName = e.target.value;
        }}
      />
      <input
        type="text"
        aria-label="Product name"
        onChange={(e) => {
          newProductPrice = e.target.value;
        }}
      />
      <input
        type="text"
        aria-label="Product name"
        onChange={(e) => {
          newProductDescription = e.target.value;
        }}
      />
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
              image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              rating: { rate: null, count: 0 },
            },
          ]);
        }}
      >
        Add new product
      </button>
      {productList.map(({ id, image, price, title }) => (
        <Product key={id} imgSrc={image} price={price} title={title} />
      ))}
      ;
    </div>
  );
}

export default Products;

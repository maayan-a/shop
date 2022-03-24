import Product from "../Product/Product";
import "./Products.css";
function Products({ filteredList, productList, setProductList }) {
  let newProductName = "";
  let newProductPrice = "";
  let newProductDescription = "";
  return (
    <section className="ProductList">
      <input
        type="text"
        placeholder="Product name"
        onChange={(e) => {
          newProductName = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Product name"
        onChange={(e) => {
          newProductPrice = e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="Product name"
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
      {filteredList.map(
        ({ id, image, title, price, description, category, rating }) => (
          <Product
            key={id}
            id={id}
            imgSrc={image}
            price={price}
            title={title}
            description={description}
            category={category}
            rating={rating}
          />
        ),
      )}
      ;
    </section>
  );
}

export default Products;

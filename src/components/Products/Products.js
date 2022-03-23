import Product from "../Product/Product";
import "./Products.css";

function Products({ ProductList }) {
  return (
    <div className="ProductList">
      {ProductList.map(({ id, image, price, title }) => (
        <Product key={id} imgSrc={image} price={price} title={title} />
      ))}
      ;
    </div>
  );
}

export default Products;

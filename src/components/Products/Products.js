import Product from "../Product/Product";
import "./Products.css";
function Products({ filteredList }) {
  return (
    <section className="ProductList">
      {filteredList.map(
        ({ id, image, title, price, description, category }) => (
          <Product
            key={id}
            id={id}
            imgSrc={image}
            price={price}
            title={title}
            description={description}
            category={category}
          />
        ),
      )}
    </section>
  );
}

export default Products;

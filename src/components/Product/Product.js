import "./Product.css";

function Product({ id, title, price, description, category, imgSrc, rating }) {
  return (
    <div key={id} className="Product-card">
      <div className="Product-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="Product-info">
        <h5>title: {title}</h5>
        <h5>price: {price} $</h5>
        <h5>description: {description}</h5>
        <h5>category: {category}</h5>
      </div>
    </div>
  );
}

export default Product;

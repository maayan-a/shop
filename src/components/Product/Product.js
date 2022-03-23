import "./Product.css";

function Product({ imgSrc, title, price }) {
  return (
    <div className="Product-card">
      <div className="Product-image">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="Product-info">
        <h5>{title}</h5>
        <h5>{price} $</h5>
      </div>
    </div>
  );
}

export default Product;

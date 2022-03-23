import "./Product.css";

function Product({ imgSrc, name, price }) {
  return (
    <div className="Product-card">
      <div className="Product-image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="Product-info">
        <h5>{name}</h5>
        <h5>{price} $</h5>
      </div>
    </div>
  );
}

export default Product;

//import "./Header.css";
import AddProduct from "../AddProduct/AddProduct";
import ToggleButton from "../ToggleButton";

function Header({ categories, onFilter, productList, setProductList }) {
  return (
    <div>
      <div className="header-title">
        <h1>My Shop</h1>
      </div>

      <div className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
          <label>Filter by:</label>
          <select onChange={(e) => onFilter(e.target.value)}>
            <option key={"All products"}>All products</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <br />

          <div>
            {/* <AddProduct
              productList={productList}
              setProductList={setProductList}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

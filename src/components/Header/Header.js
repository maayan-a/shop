//import "./Header.css";

function Header({ categories }) {
  return (
    <div>
      <div className="header-title">
        <h1>My Shop</h1>
      </div>

      <div className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select>
              <option key={"All products"}>All products</option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="all">All Jackets</option>
              <option value="2016">2016</option>
              <option value="all">Jacket</option>
              <option value="all">Jackets</option>
              <option value="all">Layers</option>
              <option value="all">Obermeyer</option>
              <option value="all">Roxy</option>
              <option value="all">Women</option>
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;

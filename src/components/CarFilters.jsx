function CarFilters({ activeCategory, setActiveCategory, sortBy, setSortBy, priceRange, setPriceRange }) {
  const categories = ['All', 'Economy', 'Sedan', 'SUV', 'Luxury', 'Executive'];

  return (
    <div className="filter-panel">
      <div className="filter-row">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`chip ${activeCategory === category ? 'selected' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="filter-controls">
        <div className="field compact-field">
          <label htmlFor="sortBy">Sort by</label>
          <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price Low to High</option>
            <option value="price-high">Price High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="field compact-field range-field">
          <label htmlFor="priceRange">Max daily rate</label>
          <input
            id="priceRange"
            type="range"
            min="30000"
            max="200000"
            step="5000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <div className="range-text">Up to ₦{priceRange.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default CarFilters;

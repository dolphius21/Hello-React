const MenuCategories = ({ categories, onFilterMenu, activeCategory }) => {
  return (
    <div className="menu-categories-container">
      {categories.map((category, index) => {
        return (
          <button
            className={`btn menu-categories-btn ${
              activeCategory === category && 'menu-active'
            }`}
            key={index}
            onClick={() => {
              onFilterMenu(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default MenuCategories;

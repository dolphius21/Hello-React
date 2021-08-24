const MenuItems = ({ menu }) => {
  return (
    <div className="menu-center">
      {menu.map((menuItem) => {
        const { id, title, price, image, desc } = menuItem;
        return (
          <article className="menu-item card" key={id}>
            <img src={image} alt={title} className="menu-image" />
            <div className="menu-info">
              <div className="menu-header">
                <h4>{title}</h4>
                <h4 className="menu-price">${price}</h4>
              </div>
              <p className="menu-desc">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuItems;

import { useState } from 'react';
import MenuCategories from './MenuCategories';
import MenuItems from './MenuItems';
import menuData from '../data/menu';

const allCategories = [
  'all',
  ...new Set(menuData.map((item) => item.category))
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);

  const menu =
    activeCategory === 'all'
      ? menuData
      : menuData.filter((item) => activeCategory === item.category);

  return (
    <section className="menu-container">
      <h2 className="title">Our Menu</h2>
      <MenuCategories
        categories={allCategories}
        onFilterMenu={setActiveCategory}
        activeCategory={activeCategory}
      />
      <MenuItems menu={menu} />
    </section>
  );
};

export default Menu;

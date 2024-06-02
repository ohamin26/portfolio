import { useState } from 'react';
import { menuButton, menuLink, activeItem, sidebarContainer } from './sideBar.css';
import { Item } from './item';

interface SidebarItemProps {
  item: { name: string };
  onClick: (itemName: string) => void;
  isActive: boolean;
}

const SidebarItem = ({ item, onClick, isActive }: SidebarItemProps) => (
  <div className={`${menuButton} ${isActive ? activeItem : ''}`} onClick={() => onClick(item.name)}>
    <Item text={item.name} />
  </div>
);

const SidebarItemLink = ({ item, isActive }: SidebarItemProps) => (
  <a
    className={`${menuLink} ${isActive ? activeItem : ''}`}
    href={item.name === 'GitHub' ? 'https://github.com/ohamin26' : 'https://ohamin26.tistory.com/'}
    target="_blank"
  >
    <Item text={item.name} />
  </a>
);

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    if (expandedItems.includes(itemName)) {
      setExpandedItems(expandedItems.filter((item) => item !== itemName));
    } else {
      setExpandedItems([...expandedItems, itemName]);
    }
    console.log(itemName);
    document.getElementById(itemName)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Introduce' },
    { name: 'Skills' },
    { name: 'Project' },
    { name: 'GitHub' },
    { name: 'Blog' },
  ];

  return (
    <div className={sidebarContainer}>
      {menuItems.map((item) =>
        item.name === 'GitHub' || item.name === 'Blog' ? (
          <SidebarItemLink key={item.name} item={item} onClick={handleItemClick} isActive={activeItem === item.name} />
        ) : (
          <SidebarItem key={item.name} item={item} onClick={handleItemClick} isActive={activeItem === item.name} />
        ),
      )}
    </div>
  );
};

export default Sidebar;

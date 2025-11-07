import React from 'react';
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./MenuItem.scss";

const MenuItem = ({ item, index, openMenu, toggleMenu }) => (
  <li className={`menu-item ${openMenu === index ? "open" : ""}`}>
    {item.submenu ? (
      <>
        {/* Кнопка для відкриття підменю */}
        <button
          className="menu-button"
          onClick={() => toggleMenu(index)}
          aria-expanded={openMenu === index}
        >
          {item.name}
          {openMenu === index ? <ChevronUp /> : <ChevronDown />}
        </button>
        {/* Підменю */}
        <ul className="submenu" style={{ maxHeight: openMenu === index ? "300px" : "0" }}>
          {item.submenu.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link className="sub-link" to={subItem.link}>
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      // Звичайний пункт меню без підменю
      <Link to={item.link} className="nav-link">
        {item.name}
      </Link>
    )}
  </li>
);

export default MenuItem;
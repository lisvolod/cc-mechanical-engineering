import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem/MenuItem";
import "./NavigationMenu.scss";
import menuItems from "../../mockups/menuItems";



const NavigationMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  // Закривати меню при зміні маршруту
  useEffect(() => {
    setOpenMobileMenu(false);
    setOpenMenu(null);
  }, [location]);

  // Закривати меню при кліку поза його межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMobileMenu(false);
        setOpenMenu(null);
      }
    };

    if (openMobileMenu || openMenu !== null) {
      document.addEventListener("pointerdown", handleClickOutside);
    } else {
      document.removeEventListener("pointerdown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [openMobileMenu, openMenu]);

  return (
    <nav className="nav" ref={menuRef}>
      <div className="logo">ЦК машинобудівних технологій</div>
      <button className="burger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
        ☰
      </button>

      <ul className={`menu ${openMobileMenu ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} index={index} openMenu={openMenu} toggleMenu={toggleMenu} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;



// import React, { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import MenuItem from "./MenuItem/MenuItem";
// import "./NavigationMenu.scss";

// // Масив об'єктів, що містить дані меню
// const menuItems = [
//   { name: "Головна", link: "/" },
//   {
//     name: "Про ЦК",
//     submenu: [
//       { name: "Історія ЦК", link: "/history" },
//       { name: "Склад ЦК", link: "/team" },
//       { name: "Підвищення кваліфікації", link: "/qualification" },
//       { name: "Матеріально-технічна база ЦК", link: "/resources" },
//     ],
//   },
//   {
//     name: "Спеціальність",
//     submenu: [
//       { name: "Спеціальність", link: "/speciality" },
//       { name: "Наші стейкхолдери", link: "/stakeholders" },
//       { name: "Наші випускники", link: "/graduates" },
//     ],
//   },
//   {
//     name: "Студенту",
//     submenu: [
//       { name: "Освітньо-професійні програми", link: "/programs" },
//       { name: "Дисципліни (силабуси)", link: "/syllabus" },
//       { name: "Дисципліни за вибором здобувача освіти", link: "/electives" },
//       { name: "Методичні рекомендації до КР", link: "/kr-methodology" },
//       { name: "Виконання кваліфікаційної роботи у вигляді ДП", link: "/dp-methodology" },
//       { name: "Практики", link: "/practices" },
//     ],
//   },
//   { name: "Досягнення", link: "/achievements" },
//   { name: "Дозвілля", link: "/leisure" },
//   { name: "Контакти", link: "/contacts" },
// ];

// const NavigationMenu = () => {
//   // Стан для відкритого підменю
//   const [openMenu, setOpenMenu] = useState(null);
//   // Стан для мобільного меню
//   const [openMobileMenu, setOpenMobileMenu] = useState(false);

//   // Використовуємо useLocation для відстеження змін маршруту
//   const location = useLocation();

//   const menuRef = useRef(null); // Створюємо посилання на меню

//   // Функція перемикання меню
//   const toggleMenu = (index) => {
//     setOpenMenu(openMenu === index ? null : index);
//   };

//   // Функція перемикання мобільного меню
//   const toggleMobileMenu = () => {
//     setOpenMobileMenu((prev) => !prev);
//   };

//   // Закривати меню при зміні маршруту
//   useEffect(() => {
//     setOpenMobileMenu(false);
//     setOpenMenu(false);
//   }, [location]);


//    // Закривати меню при кліку поза ним
//    useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setOpenMobileMenu(false);
//         setOpenMenu(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="nav">
//       <div className="logo">ЦК комп'ютерних наук</div>
//       {/* Кнопка для відкриття мобільного меню */}
//       <button className="burger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
//         ☰
//       </button>

//       {/* Основне меню */}
//       <ul className={`menu ${openMobileMenu ? "active" : ""}`}>
//         {menuItems.map((item, index) => (
//           <MenuItem key={index} item={item} index={index} openMenu={openMenu} toggleMenu={toggleMenu} />
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavigationMenu;

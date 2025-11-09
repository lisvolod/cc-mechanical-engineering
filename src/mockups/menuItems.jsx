const menuItems = [
    { name: "Головна", link: "/" },
    {
      name: "Про ЦК",
      submenu: [
        { name: "Про ЦК", link: "/about" },
        { name: "Історія ЦК", link: "/history" },
        { name: "Склад ЦК", link: "/team" },
        { name: "Підвищення кваліфікації", link: "/qualification" },
        { name: "Матеріально-технічна база ЦК", link: "/resources" },
      ],
    },
    {
      name: "Спеціальність",
      submenu: [
        { name: "Спеціальність", link: "/speciality" },
        { name: "Наші стейкхолдери", link: "/stakeholders" },
        { name: "Наші випускники", link: "/graduates" },
      ],
    },
    {
      name: "Студенту",
      submenu: [
        { name: "Освітньо-професійні програми", link: "/programs" },
        { name: "Дисципліни (силабуси)", link: "/disciplines" },
        { name: "Дисципліни за вибором здобувача освіти", link: "/chosen" },
        { name: "Методичні рекомендації до КР", link: "/kr-methodology" },
        { name: "Виконання кваліфікаційної роботи у вигляді ДП", link: "/dp-methodology" },
        { name: "Практики", link: "/practices" },
      ],
    },
    { name: "Досягнення", link: "/achievements" },
    { name: "Дозвілля", link: "/leisure" },
    { name: "Контакти", link: "/contacts" },
  ];

  export default menuItems;
// Зовнішні стейкхолдери ЦК машинобудівних технологій
// (роботодавці, бази практики, заклади вищої освіти).
//
// contract: null — співпраця без договору;
//   signed — дата укладання, until — термін дії (null = безстроковий),
//   file — шлях до PDF у папці public (необов'язково).
// cooperation — ключі з об'єкта cooperationTypes нижче.

export const cooperationTypes = {
  practice: {
    title: "Навчальні та виробничі практики",
    text: "Здобувачі освіти проходять практику на сучасних машинобудівних підприємствах, знайомляться з реальними технологічними процесами та обладнанням.",
  },
  cnc: {
    title: "Практичні заняття на верстатах з ЧПК",
    text: "Заняття проводяться безпосередньо на виробничому обладнанні партнерів — студенти програмують та налагоджують верстати з ЧПК.",
  },
  education: {
    title: "Продовження навчання за спеціальністю",
    text: "Випускники мають можливість продовжити навчання для здобуття ступеня бакалавра за спорідненою спеціальністю.",
  },
  science: {
    title: "Науково-практична співпраця",
    text: "Спільні наукові та методичні заходи, конференції, консультації науковців для викладачів і студентів.",
  },
};

export const stakeholders = [
  {
    name: "Тернопільський національний технічний університет імені Івана Пулюя",
    contact: { name: "Роман ЛЕЩУК", position: "к.т.н., доцент, декан факультету інженерії машин, споруд та технологій" },
    contract: null,
    cooperation: ["education", "science"],
    url: "https://tntu.edu.ua/?p=uk/main",
  },
  {
    name: "ОСП Корпорація «ВАТРА»",
    contact: { name: "Ярослав ВОВК", position: "заступник генерального директора з науково-технічного розвитку" },
    contract: null,
    cooperation: ["practice"],
    url: null,
  },
  {
    name: "АТ «Технологія»",
    contact: { name: "Олег КРАВЧЕНКО", position: "директор комерційної виробничої площадки" },
    contract: { signed: "20.12.2026", until: null },
    cooperation: ["practice"],
    url: "https://technologia.com.ua/",
  },
  {
    name: "ТОВ «Завод «Ремпобуттехніка»",
    contact: { name: "Людмила СЛОБОДЯНЮК", position: "директор" },
    contract: { signed: "11.05.2023", until: "11.05.2028" },
    cooperation: ["practice"],
    url: "https://rpt.te.ua/ua/",
  },
  {
    name: "ТОВ «Шредер»",
    contact: { name: "Василь МОНАСТИРСЬКИЙ", position: "генеральний директор" },
    contract: { signed: "10.09.2024", until: "31.12.2030" },
    cooperation: ["practice"],
    url: "https://ua.schreder.com/uk",
  },
  {
    name: "ТОВ «САЮЗ»",
    contact: { name: "Павло КАРАСТОЯНОВ", position: "директор" },
    contract: { signed: "24.08.2026", until: "30.12.2031" },
    cooperation: ["practice"],
    url: "https://sayuz.com.ua/",
  },
  {
    name: "ТзОВ НВП «Теплобак»",
    contact: { name: "Світлана ШЕВЧЕНКО", position: "директор" },
    contract: { signed: "16.03.2026", until: "31.12.2030" },
    cooperation: ["practice"],
    url: "https://teplobak.com.ua/",
  },
  {
    name: "ТДВ «БУЛАТ»",
    contact: { name: "Олександр КОВАЛЬЧУК", position: "директор" },
    contract: { signed: "11.10.2024", until: "31.12.2029", file: "/assets/docs/contracts/bulat.pdf" },
    cooperation: ["practice", "cnc"],
    url: "https://bulat.te.ua/",
  },
  {
    name: "ПП «Науково-виробнича фірма «КВОТА»",
    contact: { name: "Ольга МЕЛИХ", position: "виконавчий директор" },
    contract: { signed: "01.06.2023", until: "01.06.2028", file: "/assets/docs/contracts/kvota.pdf" },
    cooperation: ["practice", "cnc"],
    url: "https://www.kvota.com.ua/",
  },
  {
    name: "ФОП Кравченко В.І.",
    contact: { name: "Володимир КРАВЧЕНКО", position: "директор" },
    contract: { signed: "29.12.2023", until: "31.12.2028", file: "/assets/docs/contracts/kravchenko.pdf" },
    cooperation: ["practice", "cnc"],
    url: null,
  },
];
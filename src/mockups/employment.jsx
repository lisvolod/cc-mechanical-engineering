// Моніторинг працевлаштування випускників.
// Цифри порахувано вручну з PDF-звітів (кожен випускник — в одній категорії):
//   work      — працюють в Україні
//   study     — продовжують навчання
//   studyWork — навчаються і працюють
//   abroad    — за кордоном
// employers — назви підприємств зі звіту (без ФОП); partner: true — наш стейкхолдер.
// Новий рік випуску — додайте об'єкт на початок масиву.

export const employmentCategories = [
  { key: "work", label: "Працюють в Україні" },
  { key: "studyWork", label: "Навчаються і працюють" },
  { key: "study", label: "Продовжують навчання" },
  { key: "abroad", label: "За кордоном" },
];

export const employment = [
  {
    year: 2026,
    total: 11,
    counts: { work: 4, studyWork: 1, study: 2, abroad: 4 },
    employers: [
      { name: "ПП «Галіт»" },
      { name: "ТОВ «Волочиськ-Агро»" },
      { name: "ТОВ «Роботизовані агросистеми»" },
      { name: "Ельмарт" },
      { name: "MOTO CLASSIC" },
    ],
    file: "/assets/docs/graduates/employment-2026.pdf",
  },
  {
    year: 2025,
    total: 17,
    counts: { work: 7, studyWork: 2, study: 5, abroad: 3 },
    employers: [
      { name: "ТОВ «Шредер»", partner: true },
      { name: "Knorr-Bremse" },
      { name: "ТОВ «АРС-кераміка»" },
      { name: "ТОВ «АМТ»" },
      { name: "ПП «Будпостач»" },
      { name: "АлюСат" },
      { name: "СТО Castrol" },
      { name: "Ельмарт" },
      { name: "Компанія «Епіцентр К»" },
    ],
    file: "/assets/docs/graduates/employment-2025.pdf",
  },
];
import { p } from "framer-motion/client";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Resources.scss";

const Resources = () => {
  const resourceData = [
    {
      title:
        "№ 101в. Лабораторія конструкційних матеріалів, гідравлічних та пневматичних систем",
      equipment: [
        "Твердомір за системою Брінеля",
        "2 оптично-електронні мікроскопи",
        "пневмо- та гідростанції",
      ],
    },
    {
      title:
        "№ 201в. Навчально-обчислювальний центр, лабораторія інженерної та комп’ютерної графіки",
      equipment: [
        "3D-принтер",
        "3D-сканер",
        "2 ПК",
        "телевізор для трансляції навчальних відео-матеріалів",
      ],
    },
    {
      title:
        "№ 209в. Кабінет інженерної і комп’ютерної графіки, технології та обладнання 3D друку",
      equipment: [
        "10 ПК із ліцензійним пакетом CAD/CAM/CAE SolidWorks",
        "зразки друкованої 3D продукції",
        "проектор для трансляції навчальних відео-матеріалів",
      ],
    },
    {
      title:
        "№ 213в. Кабінет технології машинобудування, взаємозамінності, стандартизації та технічних вимірювань",
      equipment: [
        "зразки кінцевих мір довжини",
        "штангенциркулі",
        "мікрометри",
        "калібри",
        "телевізор для трансляції навчальних відео-матеріалів",
      ],
    },
    {
      title:
        "№ 214в. Кабінет металорізальних верстатів та технологічного оснащення",
      images: [
        "/assets/images/cabinets/214v/01.jpg",
        "/assets/images/cabinets/214v/02.jpg",
      ],
      equipment: [
        "окремі вузли металорізальних верстатів",
        "макети передач",
        "зразки шорсткості",
        "затискні та контрольні механізми",
        "проектор для трансляції навчальних відео-матеріалів",
      ],
    },
    {
      title:
        "№ 321. Кабінет-лабораторія CAD/CAE систем, САПР та САПР ТП",
      images: [
        "/assets/images/cabinets/321/01.jpg",
        "/assets/images/cabinets/321/02.jpg",
      ],
      equipment: [
        "12 ПК із ліцензійним пакетом CAD/CAM/CAE фірми Autodesk",
        "2 стійки-симулятори верстатів з ЧПК американської фірми HAAS",
        "лазерний гравер-фрезер",
        "2 телевізори для трансляції навчальних відео-матеріалів",
      ],
    },
    {
      title: "Навчально-виробничі майстерні",
      equipment: [],
    },
  ];

  return (
    <section className="resources">
      <h2>Матеріально-технічна база ЦК</h2>

      {resourceData.map((resource, index) => (
        <div className="resource" key={index}>
          <h3>{resource.title}</h3>

         {/* Перевіряємо наявність обладнання */}
          {resource.equipment && resource.equipment.length > 0 && (
            <div>
              <p className="equipment">Обладнання:</p>
              <ul className="equipment-list">
                {resource.equipment.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Перевіряємо наявність фото */}
          {resource.images && resource.images.length > 0 && (
            <ImageSlider images={resource.images} />
          )}

 
        </div>
      ))}
    </section>
  );
};

export default Resources;

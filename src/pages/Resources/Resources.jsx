import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Resources.scss";

const Resources = () => {
  const resourceData = [
    {
      title:
        "№ 101. Лабораторія технологій створення програмних продуктів та тестування програмних систем і комплексів",
      images: [
        "/assets/images/cabinets/101/1.jpg",
        "/assets/images/cabinets/101/2.jpg",
        "/assets/images/cabinets/101/3.jpg",
        "/assets/images/cabinets/101/4.jpg",
      ],
    },
    {
      title: "№ 102. Кабінет алгоритмізації та програмування інформаційних систем",
      images: [
        "/assets/images/cabinets/102/1.png",
        "/assets/images/cabinets/102/2.png",
        "/assets/images/cabinets/102/3.png",
        "/assets/images/cabinets/102/4.png",
      ],
    },
    {
      title: "№ 104. Лабораторія організації баз даних та дипломного проектування",
      images: [
        "/assets/images/cabinets/104/1.jpg",
        "/assets/images/cabinets/104/2.jpg",
        "/assets/images/cabinets/104/3.jpg",
        "/assets/images/cabinets/104/4.jpg",
      ],
    },
    {
      title: "№ 219. Лабораторія мікропроцесорних систем та ІоТ",
      images: [
        "/assets/images/cabinets/219/1.jpg",
        "/assets/images/cabinets/219/2.jpg",
        "/assets/images/cabinets/219/3.jpg",
      ],
    },
  ];

  return (
    <section className="resources">
      <h2>Матеріально-технічна база ЦК</h2>

      {/* {resourceData.map((resource, index) => (
        <div className="resource" key={index}>
          <h3>{resource.title}</h3>
          <ImageSlider images={resource.images} />
        </div>
      ))} */}
    </section>
  );
};

export default Resources;
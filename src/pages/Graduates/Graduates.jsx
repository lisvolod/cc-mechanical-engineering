import React from "react";
import "./Graduates.scss";

const graduates = [
    {
        name: "Віталій Волошин",
        position:
            "Кандидат технічних наук, доцент, заступник директора з навчальної роботи ВСП 'Тернопільський фаховий коледж ТНТУ імені Івана Пулюя'",
        image: "/assets/images/graduates/voloshyn.jpg",
    },
    {
        name: "Володимир Кобельник",
        position:
            "Кандидат технічних наук, доцент кафедри конструювання верстатів, інструментів та машин ТНТУ імені Івана Пулюя",
        image: "/assets/images/graduates/kobelnyk.jpg",
    },
    {
        name: "Андрій Захарій",
        position: "Директор ТОВ «Планета комфорту»",
        image: "/assets/images/graduates/zakhariy.jpg",
    },
    {
        name: "Назар Кашуба",
        position:
            "Заступник директора з адміністративно-господарської роботи ВСП 'Тернопільський фаховий коледж ТНТУ'",
        image: "/assets/images/graduates/kashuba.jpg",
    },
    {
        name: "Ігор Лось",
        position: "Інженер-конструктор відділу розробок та інновацій ТОВ “ВОДАЛЕНД ІНДАСТРІ”",
        image: "/assets/images/graduates/los.jpg",
    },
    {
        name: "Юрій Щербань",
        position:
            "Майстер спорту, багаторазовий чемпіон України, призер міжнародних змагань, інженер з розробки металоконструкцій",
        image: "/assets/images/graduates/shcherban.jpg",
    },
    {
        name: "Володимир Оліховський",
        position: "Приватний підприємець (ФОП Ціцюра В.М.)",
        image: "/assets/images/graduates/olikhovsky.jpg",
    },
    {
        name: "Володимир Олійник",
        position:
            "Оператор координатно-розточного верстату з ЧПК (ремонт ГБЦ та БЦ)",
        image: "/assets/images/graduates/oliynyk.jpg",
    },
    {
        name: "Володимир Смерека",
        position: "Керівник з розподілу робочих змін транспортної компанії Nord Kompany (м. Стокгольм, Швейцарія)",
        image: "/assets/images/graduates/smereka.jpg",
    },
    {
        name: "Тарас Федорчук",
        position: "Оператор промислових швейних машин Kampus Klothes (Філадельфія, США)",
        image: "/assets/images/graduates/fedorchuk.jpg",
    },
    {
        name: "Юрій Караба",
        position: "Оператор складальної лінії на заводі Volkswagen (м. Братислава, Словаччина)",
        image: "/assets/images/graduates/karaba.jpg",
    },
    {
        name: "Костя Гавришків",
        position:
            "Фахівець з експлуатації та технічного обслуговування верстатного парку (9 одиниць)",
        image: "",
    },
    {
        name: "Леся Добрянська",
        position: "Заступник директора ТОВ “ГРУП-КОНСАЛТ”",
        image: "/assets/images/graduates/dobryanska.jpg",
    },
];

const Graduates = () => {
    return (
        <div className="graduates">
            <h2>Наші випускники</h2>
            <p className="intro">
                Випускники спеціальності — це висококваліфіковані фахівці, які успішно
                працюють у сфері машинобудування, освіти та науки і не тільки. Вони
                поєднують інженерні знання, практичний досвід і сучасні технології,
                гідно представляючи Тернопільський фаховий коледж ТНТУ імені Івана
                Пулюя в Україні та за її межами.
            </p>

            <div className="graduates-list">
                {graduates.map((graduate, index) => {
                    // визначаємо зображення: якщо не вказано — підставляємо default
                    const imageSrc =
                        graduate.image && graduate.image.trim() !== ""
                            ? graduate.image
                            : "/assets/images/graduates/default.png";

                    return (
                        <div key={index} className="graduate-card">
                            <div className="image-container">
                                <img src={imageSrc} alt={graduate.name} />
                            </div>
                            <h4>{graduate.name}</h4>
                            <p>{graduate.position}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Graduates;

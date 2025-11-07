import React from "react";
import "./Graduates.scss";

const graduates = [
    { name: "Варакута Сергій", position: "Senior Golang/Solidity Blockchain Engineer, засновник ChainFusion" },
    { name: "Охрімчук Богдан", position: "Senior Account Executive у Precoro" },
    { name: "Круглик Юрій", position: "React Native/Backend Developer у Apiko" },
    { name: "Андрущак Микола", position: "Frontend Developer у Magnise" },
    { name: "Івашенюк Юрій", position: "Founder & CEO у SolaceIn, Team Lead у Планета Кіно" },
    { name: "Кучма Олександр", position: "Development Team Lead в SaaSJet" },
    { name: "Бурий Володимир", position: "Software Development Engineer у ВАТ «Тернопільобленерго»" },
    { name: "Піпан Руслан", position: "Java Developer at Paidle SA" },
    { name: "Покидко Олександр", position: "Software Engineer у GlobalLogic" },
    { name: "Южин Назарій", position: "PHP Backend Developer у Linkup Studio" },
    { name: "Бекер Іван", position: "Java Developer у Magnise" },
    { name: "Демчук Василь", position: "Frontend Developer у ПриватБанк" },
    { name: "Закопець Андрій", position: "Frontend Developer" },
    { name: "Івашенюк Ірина", position: "Frontend Developer" },
    { name: "Калушка Роман", position: "директор ГО «Думка молоді»" },
    { name: "Мартинюк Володимир", position: "Java Backend Developer" },
    { name: "Качуровський Дмитро", position: "Backend Engineer у Waylight" },
    { name: "Столярик Юрій", position: "Frontend Developer у NRG Software" },
    { name: "Кліщ Максим", position: "Machine Learning Engineer у SaaSJet" },
    { name: "Стодола Назарій", position: "Software Engineer у Wise Engineering" },
];

const Graduates = () => {
    return (
        <div className="graduates">
            {/* <h2>Наші випускники</h2>
            <p>
                Перший набір в групу підготовки студентів за спеціальністю, яка на той час мала назву
                5.05010101 «Обслуговування програмних систем та комплексів», було здійснено у 2013 р., а відтак перший випуск
                було здійснено у 2017 році.
            </p>
            <h3>Кращі випускники:</h3>
            <div className="graduates-list">
                {graduates.map((graduate, index) => (
                    <div key={index} className="graduate-card">
                        <h4>{graduate.name}</h4>
                        <p>{graduate.position}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Graduates;

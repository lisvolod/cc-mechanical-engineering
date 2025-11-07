import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Stakeholders.scss";

const stakeholders = [
    "SoftServe",
    "Elogic Commerce",
    "SaaSJet",
    "Magnetic One",
    "VAIMO",
    "Magnise",
    "ГО «Ternopil It Cluster»"
];

const events = [
    {
        title:
            "Файне ІТ",
        images: [
            "/assets/images/events/it/2.png",
            "/assets/images/events/it/1.png",
            "/assets/images/events/it/3.png",
            "/assets/images/events/it/4.png",
            "/assets/images/events/it/5.png",
            "/assets/images/events/it/6.png",
            "/assets/images/events/it/7.png",
            "/assets/images/events/it/8.png",
            "/assets/images/events/it/9.png"
        ],
    },
    {
        title: "Екскурсія в ІТ-компанію Magnis",
        images: [
            "/assets/images/events/magnis/1.png",
            "/assets/images/events/magnis/2.png",
            "/assets/images/events/magnis/3.png"
        ],
    },
    {
        title: "Зустріч з представниками ІТ-компанії ELEKS",
        images: [
            "/assets/images/events/eleks/1.png",
            "/assets/images/events/eleks/2.png"
        ],
    },
    {
        title: "Година коду з ІТ-Кластером Тернополя",
        images: [
            "/assets/images/events/hour-of-code/1.png",
            "/assets/images/events/hour-of-code/2.png",
            "/assets/images/events/hour-of-code/3.png",
        ],
    },
    {
        title: "Зустріч з представниками ІТ-компанії ELOGIC",
        images: [
            "/assets/images/events/elogic/1.png",
            "/assets/images/events/elogic/2.png",
            "/assets/images/events/elogic/3.png",
            "/assets/images/events/elogic/4.png"
         ],
    },
];

const Stakeholders = () => {
    return (
        <div className="stakeholders">
            <h1>Наші стейкхолдери</h1>
            {/* <p>
                Співпраця із провідними ІТ компаніями є дуже корисною для студентів спеціальності та коледжу в цілому. Це допомагає студентам здобувати практичний досвід та знання, які відповідають потребам ринку праці, а також забезпечити коледжу доступ до новітніх технологій та знань від провідних гравців у галузі. Договір про співпрацю (або меморандум про співпрацю) підписано з наступними ІТ-компаніями:
            </p>
            <ul>
                {stakeholders.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>

            <h2>Форми співпраці</h2>
            <ul>
                <li><strong>Стажування та практика. </strong>Студенти мають можливість пройти стажування або практику в провідних ІТ компаніях, де вони можуть отримати практичний досвід та познайомитися з робочим процесом в компанії. Це допомагає студентам здобути цінний досвід та підвищити свою привабливість для майбутнього працевлаштування.</li>
                <li><strong>Лекції та майстер-класи від фахівців компаній.</strong> Представники провідних ІТ компаній періодично проводять лекції та майстер-класи для студентів та викладачів коледжу, діляться своїм досвідом та знаннями в галузі.</li>
                <li><strong>Програми підготовки та навчання.</strong> ІТ компанії надають коледжу доступ до своїх навчальних програм, які дозволяють студентам та викладачам отримати новітні знання та навички у галузі.</li>
                <li><strong>Спільна робота над освітньо-професійною програмою спеціальності та робочими програмами навчальних дисциплін.</strong> З метою забезпечення студентів сучасними та конкурентоспроможними знаннями, компанії надають рекомендації та побажання щодо наповнення навчальних дисциплін, допомагають актуалізували та доповнили структуру освітньо-професійної програми спеціальності.</li>
                <li><strong>Професійне працевлаштування.</strong> ІТ компанії надають можливості працевлаштування для випускників коледжу, що дозволить студентам отримати перспективну роботу та розвиватися у професійному середовищі провідної компанії.</li>
            </ul>

            {events.map((resource, index) => (
                <div className="resource" key={index}>
                    <h3>{resource.title}</h3>
                    <ImageSlider images={resource.images} />
                </div>
            ))} */}
        </div>
    );
};

export default Stakeholders;

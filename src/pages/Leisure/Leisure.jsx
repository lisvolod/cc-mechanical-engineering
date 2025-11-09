import React from "react";
import Marquee from "react-fast-marquee";
import "./Leisure.scss";

export const Leisure = () => {
    const imageGallery = [
        {
            event: "Екскурсія на провідне підприємство у сфері виробництва та постачання компонентів для прес-форм та штампів - компанію КВОТА",
            images: [
                "/assets/images/studentLeisure/01/01.jpg",
                "/assets/images/studentLeisure/01/02.jpg",
                "/assets/images/studentLeisure/01/03.jpg",
                "/assets/images/studentLeisure/01/04.jpg",
                "/assets/images/studentLeisure/01/05.jpg",
                "/assets/images/studentLeisure/01/06.jpg",
                "/assets/images/studentLeisure/01/07.jpg",
                "/assets/images/studentLeisure/01/08.jpg",
                "/assets/images/studentLeisure/01/09.jpg",
                "/assets/images/studentLeisure/01/10.jpg",
            ]
        },
        {
            event: "Екскурсійна поїздка до міста Теребовля",
            images: [
                "/assets/images/studentLeisure/02/01.jpg",
                "/assets/images/studentLeisure/02/02.jpg",
                "/assets/images/studentLeisure/02/03.jpg",
                "/assets/images/studentLeisure/02/04.jpg",
                "/assets/images/studentLeisure/02/05.jpg",
                "/assets/images/studentLeisure/02/06.jpg",
            ]
        },
        {
            event: "Щорічні благодійні ярмарки",
            images: [
                "/assets/images/studentLeisure/03/01.jpg",
                "/assets/images/studentLeisure/03/02.jpg",
                "/assets/images/studentLeisure/03/03.png",
            ]
        },
        {
            event: "Святкування тижня машинобудівних технологій",
            images: [
                "/assets/images/studentLeisure/07/01.png",
                "/assets/images/studentLeisure/07/02.jpg",
                "/assets/images/studentLeisure/07/03.png",
                "/assets/images/studentLeisure/07/04.png",
                "/assets/images/studentLeisure/07/05.png",
            ]
        },
        {
            event: "Вебінари, онлайн-зустрічі та гостьові лекції",
            images: [
                "/assets/images/studentLeisure/11/01.png",
                "/assets/images/studentLeisure/11/02.jpg",
                "/assets/images/studentLeisure/11/03.png",
                "/assets/images/studentLeisure/11/04.png",
                "/assets/images/studentLeisure/11/05.png",
                "/assets/images/studentLeisure/11/06.png",
            ]
        },
        {
            event: "Тернопільський академічний обласний український драматичний театр імені Т. Г. Шевченка",
            images: [
                "/assets/images/studentLeisure/13/01.jpg",
                "/assets/images/studentLeisure/13/02.jpg",
                "/assets/images/studentLeisure/13/03.jpg",
            ]
        },
        {
            event: "Студенти відвідали підприємство АТ «Технологія»",
            images: [
                "/assets/images/studentLeisure/14/01.jpg",
                "/assets/images/studentLeisure/14/02.jpg",
                "/assets/images/studentLeisure/14/03.jpg",
            ]
        },

    ];

    const videoGallery = [
        {
            event: `Участь студентів в І етапі Всеукраїнської (Відкритої) олімпіади з інженерної та комп'ютерної графіки "Секція І – Інженерна графіка (3D-моделювання)"`,
            link: "https://www.youtube.com/watch?v=qfhn7KVZMNo"
        },
        {
            event: `Ознайомлення студентів з одним з найкращих та найбільших ливарних підприємств Західної України — "Булат ТДВ" + пізнавальна екскурсія Микулинцями`,
            link: "https://www.youtube.com/watch?v=prjBYG8uRNE"
        },
        {
            event: `Студенти відвідали підприємство у м. Тернопіль, що спеціалізується на ремонті головок блоку циліндрів (ГБЦ) та блоків циліндрів (БЦ).`,
            link: "https://www.youtube.com/watch?v=pAEKUma-df8"
        },
        {
            event: `Посвята в машинобудівники`,
            link: "https://www.youtube.com/watch?v=gkeaPRI1zD8"
        },
        {
            event: `Щорічний конкурс кращий токар`,
            link: "https://www.youtube.com/watch?v=NjRy3Av8ehE"
        },
        {
            event: `Машинобудівна родина на екскурсії: студенти коледжу відвідали завод ПП «Катруб»`,
            link: "https://www.youtube.com/watch?v=1aLwJLg7hhM"
        },
    ]

    return (
        <div className="leisure">
            <h1>Студентське дозвілля</h1>
            <p >
                Організація дозвілля студентів коледжу є одним із пріоритетних напрямів виховної роботи.
                Студенти мають можливість самореалізуватися в культурних, спортивних та наукових заходах.
            </p>

            {/* 🎥 Відео-галерея */}
            <div className="videoGallery">
                <h2>Відео з заходів</h2>
                <div className="videoList">
                    {videoGallery.map((video, index) => (
                        <div key={index} className="videoCard">
                            <iframe
                                src={video.link.replace("watch?v=", "embed/")}
                                title={video.event}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                            <p>{video.event}</p>
                        </div>
                    ))}
                </div>
            </div>

            {imageGallery.map((gallery, index) => (
                <div key={index} className="carouselContainer">
                    <h3>{gallery.event}</h3>
                    <Marquee speed={30} gradient={true} gradientWidth={50} className="carouselTrack" loop={0}>
                        {[...gallery.images, ...gallery.images].map((src, imgIndex) => (
                            <div key={imgIndex} className="carouselItem">
                                <img src={src} alt={gallery.event} className="carouselImage" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            ))}
        </div>
    );
};

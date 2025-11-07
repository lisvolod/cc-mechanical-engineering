import React from "react";
import Marquee from "react-fast-marquee";
import "./Leisure.scss";

export const Leisure = () => {
    const imageGallery = [
        {
            event: "Художня самодіяльність",
            images: [
                "/assets/images/studentLeisure/art/1.png",
                "/assets/images/studentLeisure/art/2.png",
                "/assets/images/studentLeisure/art/3.png"
            ]
        },
        {
            event: "Клуб фінансової грамотності",
            images: [
                "/assets/images/studentLeisure/club/1.png",
                "/assets/images/studentLeisure/club/2.png",
                "/assets/images/studentLeisure/club/3.png"
            ]
        },
        {
            event: "День соборності",
            images: [
                "/assets/images/studentLeisure/soborn/1.png",
                "/assets/images/studentLeisure/soborn/2.png",
                "/assets/images/studentLeisure/soborn/3.png",
                "/assets/images/studentLeisure/soborn/4.png",
                "/assets/images/studentLeisure/soborn/5.png"
            ]
        },
        {
            event: "Година КОДУ",
            images: [
                "/assets/images/studentLeisure/code/1.png",
                "/assets/images/studentLeisure/code/2.png",
                "/assets/images/studentLeisure/code/3.png"
            ]
        },
        {
            event: "Дебют друго-курсника",
            images: [
                "/assets/images/studentLeisure/debut/1.png",
                "/assets/images/studentLeisure/debut/2.png",
                "/assets/images/studentLeisure/debut/3.png",
                "/assets/images/studentLeisure/debut/4.png"
            ]
        },
    ];

    return (
        <div className="leisure">
            <h1>Студентське дозвілля</h1>
            <p > 
                Організація дозвілля студентів коледжу є одним із пріоритетних напрямів виховної роботи.
                Студенти мають можливість самореалізуватися в культурних, спортивних та наукових заходах.
            </p>

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

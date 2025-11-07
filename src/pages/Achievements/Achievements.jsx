import React from 'react';
import styles from "./Achievements.module.scss";
import ImageSlider from '../../components/ImageSlider/ImageSlider';

export const Achievements = () => {
    const imageGallery = [
        {
            title: "Achievement-1",
            images: [
                "/assets/images/achivments/01/1_cr.png",
                "/assets/images/achivments/01/2.png",
            ]
        }, 
        {
            title: "Achievement-2",
            images: [
                "/assets/images/achivments/02/1.jpg",
                "/assets/images/achivments/02/2.jpg",
                "/assets/images/achivments/02/3_cr.jpg",
            ]
        },
        {
            title: "Achievement-3",
            images: [
                "/assets/images/achivments/03/1_cr.png",
                "/assets/images/achivments/03/2_cr.png",
                "/assets/images/achivments/03/3.png",
                "/assets/images/achivments/03/4.png",
                "/assets/images/achivments/03/5.png",
                "/assets/images/achivments/03/6.jpg",
            ]
        },
        {
            title: "Achievement-4",
            images: [
                "/assets/images/achivments/04/1.png",
                "/assets/images/achivments/04/2.png"
            ]
        },
        {
            title: "Achievement-5",
            images: [
                "/assets/images/achivments/05/1.png",
               
            ]
        }
        
    ];


    return (
    <section className={styles.achievements}>
        <h1>Наші досягнення</h1>
        {/* <h3>Студенти спеціальності Комп'ютерні науки показують високий рівень знань, займаючи призові місця на всеукраїнських олімпіадах з програмування.</h3>
        
        <div className="shadowed-box">
            <p className={styles.info}>Команда коледжу C_TC_TNTU_ ICTeam в складі: Пелішко Максим, Бекер Іван, Закопець Андрій, виборола 1-ге місце I етапу Всеукраїнської студентської олімпіади з програмування ACM-ICPC 2019, а команда C_TC_TNTU_Sempai в складі: Мартинюк Володимир, Кліщ Максим, Салійчук Володимир,- 2-ге місце серед команд коледжів і технікумів та посіли 5-те та 7-те місце в загальному заліку серед команд ВНЗ III-IV рівнів акредитації.</p>
            <ImageSlider images={imageGallery[0].images}/>
        </div>
        <div className="shadowed-box">
            <p className={styles.info}>Команда коледжу C_TC_TNTU_ ICTeam в складі: Пелішко Максим, Бекер Іван, Закопець Андрій представляла ВНЗ Тернопільської області на ІІІ етапі Всеукраїнської студентської олімпіади з програмування ACM-ICPC 2019, яка проводилась у м. Вінниця. Команда посіла І місце серед коледжів України.</p>
            <ImageSlider images={imageGallery[1].images}/>
        </div>
        <div className="shadowed-box">
            <p className={styles.info}>Студенти Кліщ Максим, Попович Олександр, Стодола Назарій, тренер Марціяш Г.Я. показали високі знання, уміння і навички командної роботи з алгоритмізації та створення ефективних програм серед студентських команд вищих навчальних закладів та вибороли 1-е місце серед команд коледжів Південно-західного регіону, також посіли 2-ге місце серед команд ВНЗ III-IV рівнів акредитації Тернопільської області у ІІ відбірковому етапі олімпіади з програмування ACM-ICPC 2021.</p>
            <ImageSlider images={imageGallery[2].images}/>
        </div>
        <div className="shadowed-box">
            <p className={styles.info}>Команда коледжу cTPC_TNTU_Uchihas (учасники: Гнідий Дмитро, Капусняк Михайло, Гордійчук Володимир) виборола 1-ге місце, а команда cTPC_TNTU_Sapfire (учасники: Голодюк Назарій, Березовський Віталій, Сташків Віктор) - 2-ге місце серед команд коледжів та посіли 2-те та 3-те місце в загальному заліку серед команд ВНЗ III-IV рівнів акредитації, також три команди пройшли до ІІ етапу олімпіади з програмування АСМ-ICPC.</p>
            <ImageSlider images={imageGallery[3].images}/>
        </div>
        <div className="shadowed-box">
            <p className={styles.info}>Викладач Слободян Руслан успішно здав сертифікаційний іспит в Oracle University і отримав сертифікат «Oracle Certified Professional: Java SE 11 Developer», який підтверджує вільне володіння мовою Java SE 11 та набуття цінних професійних навичок, необхідних розробнику програмного забезпечення.</p>
            <img src={imageGallery[4].images[0]} alt="" />
        </div> */}
    </section>
  )
}

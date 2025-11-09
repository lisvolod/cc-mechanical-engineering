
import styles from "./Achievements.module.scss";
import ImageSlider from '../../components/ImageSlider/ImageSlider';

export const Achievements = () => {
    const imageGallery = [
        {
            title: "Achievement-1",
            images: [
                "/assets/images/achivments/01/01.jpg",
            ]
        }, 
        {
            title: "Achievement-2",
            images: [
                "/assets/images/achivments/02/02.png",
                "/assets/images/achivments/02/01.jpg",
            ]
        },
        {
            title: "Achievement-3",
            images: [
                "/assets/images/achivments/03/01.png",
            ]
        },
        
    ];


    return (
    <section className={styles.achievements}>
        <h1>Наші досягнення</h1>
        <h3>Студенти спеціальності Галузеве машинобудування показують високий рівень знань, займаючи призові місця на олімпіадах та конкурсах.</h3>
        
        <div className="shadowed-box">
            <p className={styles.info}>Студент спеціальності Галузеве машинобудування Якименко Владислав Петрович виборов  1 місце  в ІІ (обласному) етапі  олімпіади з інженерної та комп’ютерної графіки серед закладів вищої освіти І-ІІ рівня акредитації Тернопільської області (2019р.) </p>
             <img src={imageGallery[0].images[0]} alt="" />
        </div>
        <div className="shadowed-box">
            <p className={styles.info}>І місце  у Відкритій студентській олімпіаді з інженерної та комп’ютерної графіки (секція «Інженерна графіка (3D моделювання)»), яка організовувалась за ініціативи Державного вищого навчального закладу «Чернівецький політехнічний коледж» в онлайн режимі (2021р.) </p>
            <ImageSlider images={imageGallery[1].images}/>
        </div>
        <div className="shadowed-box">
            <p className={styles.info}>Викладач інженерної та комп'ютерної графіки Ірина Гаврищук успішно склала міжнародний сертифікаційний іспит з отриманням відповідного сертифікату SOLIDWORKS CAD Design Associate (CSWA). </p>
            <img src={imageGallery[2].images[0]} alt="" />
        </div>

        {/* <div className="shadowed-box">
            <p className={styles.info}>Викладач Слободян Руслан успішно здав сертифікаційний іспит в Oracle University і отримав сертифікат «Oracle Certified Professional: Java SE 11 Developer», який підтверджує вільне володіння мовою Java SE 11 та набуття цінних професійних навичок, необхідних розробнику програмного забезпечення.</p>
            <img src={imageGallery[4].images[0]} alt="" />
        </div> */}
    </section>
  )
}

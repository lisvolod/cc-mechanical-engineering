import React from "react";
import styles from "./Contacts.module.scss";
import teamMembers from "../../mockups/teamMembers";

const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h1>Контакти викладачів</h1>
            <div className={styles.cardsContainer}>
            {teamMembers.map((member, index) => (
                <div key={index} className={styles.card}>
                    <img src={member.photo} alt={member.name} className={styles.photo} />
                    <h3 className={styles.name}>{member.name}</h3>
                    {member.email && (
                        <p className={styles.email}>
                            <a href={`mailto:${member.email}`}>Email: {member.email}</a>
                        </p>
                    )}
                    {member.phone && (
                        <p className={styles.phone}>
                            <a href={`tel:${member.phone}`}>{member.phone}</a>
                        </p>
                    )}
                </div>
            ))}
            </div>
            
        </div>
    );
};

export default Contacts;

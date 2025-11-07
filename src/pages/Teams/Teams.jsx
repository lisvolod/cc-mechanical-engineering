import React from "react";
import "./Teams.scss";
import teamMembers from "./../../mockups/teamMembers";


const Teams = () => {
  return (
    <section className="teams">
      <h2>Склад циклової комісії</h2>
      {/* <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} onError={(e) => e.target.src = '/images/team/default.jpg'} />
            <h3>{member.name}</h3>
            <p><strong>Освіта:</strong></p>
            {member.education.length > 1 ? (
              <ul>
                {member.education.map((edu, idx) => (
                  <li key={idx}>{edu}</li>
                ))}
              </ul>
            ) : (
              <p>{member.education[0]}</p>
            )}
            <p><strong>Посада:</strong> {member.position}</p>
            <p><strong>Категорія, звання:</strong> {member.category}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Teams;



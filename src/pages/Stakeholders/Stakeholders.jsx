import React, { useState } from "react";
import {
    Building2, Cog, Factory, FileText, FlaskConical, Globe,
    GraduationCap, Handshake, UserRound, Wrench,
} from "lucide-react";
import { stakeholders, cooperationTypes } from "../../mockups/stakeholders";
import "./Stakeholders.scss";

const cooperationIcons = {
    practice: Factory,
    cnc: Cog,
    education: GraduationCap,
    science: FlaskConical,
};

const Stakeholders = () => {
    const [filter, setFilter] = useState(null);

    const filtered = filter
        ? stakeholders.filter((s) => s.cooperation.includes(filter))
        : stakeholders;

    const stats = [
        { icon: Building2, value: stakeholders.length, label: "партнерів" },
        { icon: Handshake, value: stakeholders.filter((s) => s.contract).length, label: "діючих договорів" },
        { icon: Wrench, value: stakeholders.filter((s) => s.cooperation.includes("cnc")).length, label: "партнери для занять на ЧПК" },
    ];

    const countBy = (key) => stakeholders.filter((s) => s.cooperation.includes(key)).length;

    return (
        <section className="stakeholders">
            <h1>Наші стейкхолдери</h1>
            <p className="stakeholders__intro">
                Циклова комісія машинобудівних технологій тісно співпрацює з провідними
                машинобудівними підприємствами Тернопільщини та закладами вищої освіти.
                Партнери забезпечують здобувачам освіти проходження практик, заняття
                на сучасному обладнанні з ЧПК та можливість продовжити навчання.
            </p>

            <ul className="stakeholders__stats">
                {stats.map(({ icon: Icon, value, label }) => (
                    <li key={label}>
                        <Icon size={30} aria-hidden="true" />
                        <strong>{value}</strong>
                        <span>{label}</span>
                    </li>
                ))}
            </ul>

            <h2>Форми співпраці</h2>
            <p className="stakeholders__hint">Натисніть на форму співпраці, щоб побачити відповідних партнерів.</p>
            <ul className="stakeholders__forms">
                {Object.entries(cooperationTypes).map(([key, { title, text }]) => {
                    const Icon = cooperationIcons[key];
                    const active = filter === key;
                    return (
                        <li key={key}>
                            <button
                                type="button"
                                className={`stakeholders__form${active ? " is-active" : ""}`}
                                onClick={() => setFilter(active ? null : key)}
                                aria-pressed={active}
                            >
                                <Icon className="stakeholders__form-icon" size={32} aria-hidden="true" />
                                <h3>{title}</h3>
                                <p>{text}</p>
                                <span className="stakeholders__form-count">Партнерів: {countBy(key)}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>

            <div className="stakeholders__list-head">
                <h2>
                    {filter ? cooperationTypes[filter].title : "Підприємства та установи-партнери"}
                </h2>
                {filter && (
                    <button type="button" className="stakeholders__reset" onClick={() => setFilter(null)}>
                        Показати всіх
                    </button>
                )}
            </div>

            <ul className="stakeholders__list">
                {filtered.map((s) => (
                    <li className="stakeholders__card" key={s.name}>
                        <h3>{s.name}</h3>

                        <p className="stakeholders__contact">
                            <UserRound size={18} aria-hidden="true" />
                            <span>
                                <strong>{s.contact.name}</strong> — {s.contact.position}
                            </span>
                        </p>

                        <div className="stakeholders__tags">
                            {s.cooperation.map((key) => {
                                const Icon = cooperationIcons[key];
                                return (
                                    <span className="stakeholders__tag" key={key}>
                                        <Icon size={14} aria-hidden="true" />
                                        {cooperationTypes[key].title}
                                    </span>
                                );
                            })}
                        </div>

                        <div className="stakeholders__contract">
                            {s.contract ? (
                                <>
                                    <span className="stakeholders__badge stakeholders__badge--ok">Договір про співпрацю</span>
                                    <span>
                                        від {s.contract.signed},{" "}
                                        {s.contract.until ? `діє до ${s.contract.until}` : "безстроковий"}
                                    </span>
                                </>
                            ) : (
                                <span className="stakeholders__badge">Партнерська співпраця</span>
                            )}
                        </div>

                        {(s.url || s.contract?.file) && (
                            <div className="stakeholders__actions">
                                {s.url && (
                                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                                        <Globe size={16} aria-hidden="true" /> Вебсайт
                                    </a>
                                )}
                                {s.contract?.file && (
                                    <a href={s.contract.file} target="_blank" rel="noopener noreferrer">
                                        <FileText size={16} aria-hidden="true" /> Договір (PDF)
                                    </a>
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Stakeholders;
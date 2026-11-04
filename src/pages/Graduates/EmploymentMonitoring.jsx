import React from "react";
import { Building2, ExternalLink, Handshake } from "lucide-react";
import { employment, employmentCategories } from "../../mockups/employment";
import "./EmploymentMonitoring.scss";

const EmploymentMonitoring = () => {
    return (
        <section className="employment">
            <h2>Моніторинг працевлаштування випускників</h2>
            <p className="employment__intro">
                Циклова комісія щороку відстежує подальший шлях своїх випускників:
                працевлаштування за фахом, продовження навчання в закладах вищої освіти
                та професійну діяльність за кордоном.
            </p>

            <div className="employment__years">
                {employment.map((item) => {
                    const ukraine = item.total - (item.counts.abroad ?? 0);
                    return (
                        <article className="employment__card" key={item.year}>
                            <header className="employment__head">
                                <span className="employment__year">Випуск {item.year}</span>
                                <span className="employment__total">
                                    <strong>{item.total}</strong> випускників
                                </span>
                            </header>

                            {/* Сегментована смуга */}
                            <div
                                className="employment__bar"
                                role="img"
                                aria-label={employmentCategories
                                    .map((c) => `${c.label}: ${item.counts[c.key] ?? 0}`)
                                    .join(", ")}
                            >
                                {employmentCategories.map((c) => {
                                    const value = item.counts[c.key] ?? 0;
                                    if (!value) return null;
                                    return (
                                        <span
                                            key={c.key}
                                            className={`employment__seg employment__seg--${c.key}`}
                                            style={{ flexGrow: value }}
                                            title={`${c.label}: ${value}`}
                                        >
                                            {value}
                                        </span>
                                    );
                                })}
                            </div>

                            <ul className="employment__legend">
                                {employmentCategories.map((c) => (
                                    <li key={c.key}>
                                        <span className={`employment__dot employment__seg--${c.key}`} aria-hidden="true" />
                                        <span className="employment__legend-label">{c.label}</span>
                                        <strong>{item.counts[c.key] ?? 0}</strong>
                                    </li>
                                ))}
                            </ul>

                            <p className="employment__highlight">
                                <strong>{ukraine} з {item.total}</strong> випускників працюють
                                або навчаються в Україні
                            </p>

                            {item.employers?.length > 0 && (
                                <div className="employment__employers">
                                    <h3>
                                        <Building2 size={18} aria-hidden="true" /> Серед роботодавців
                                    </h3>
                                    <ul>
                                        {item.employers.map((e) => (
                                            <li
                                                key={e.name}
                                                className={e.partner ? "is-partner" : ""}
                                                title={e.partner ? "Стейкхолдер ЦК" : undefined}
                                            >
                                                {e.partner && <Handshake size={14} aria-hidden="true" />}
                                                {e.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <a
                                className="employment__link"
                                href={item.file}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink size={16} aria-hidden="true" />
                                Моніторинг працевлаштування {item.year} (PDF)
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default EmploymentMonitoring;
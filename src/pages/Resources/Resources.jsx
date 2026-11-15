import React, { useState } from "react";
import {
  Bot, Building2, ChevronDown, Cpu, DoorOpen, Factory, Gauge, Globe,
  MapPin, Monitor, Printer, Ruler, Wrench,
} from "lucide-react";
import RoomGallery from "./RoomGallery";
import {
  resources, resourceTypes, resourceHighlights, resourceAddress,
} from "../../mockups/resources";
import "./Resources.scss";

const highlightIcons = { cnc: Cpu, bot: Bot, factory: Factory, gauge: Gauge, printer: Printer, monitor: Monitor };
const EQUIPMENT_PREVIEW = 6;

const formatArea = (area) => `${String(area).replace(".", ",")} м²`;

const RoomCard = ({ room }) => {
  const [showAll, setShowAll] = useState(false);
  const equipment = showAll ? room.equipment : room.equipment.slice(0, EQUIPMENT_PREVIEW);
  const hidden = room.equipment.length - EQUIPMENT_PREVIEW;

  return (
    <article className="room" id={room.id}>
      <RoomGallery photos={room.photos} title={room.title} />

      <div className="room__info">
        <div className="room__badges">
          {room.number && <span className="room__number">№ {room.number}</span>}
          {room.area && (
            <span className="room__area"><Ruler size={15} aria-hidden="true" /> {formatArea(room.area)}</span>
          )}
        </div>

        <h3>{room.title}</h3>
        {room.description && <p className="room__description">{room.description}</p>}

        {room.equipment.length > 0 && (
          <>
            <h4><Wrench size={17} aria-hidden="true" /> Обладнання</h4>
            <ul className="room__equipment">
              {equipment.map((item) => <li key={item}>{item}</li>)}
            </ul>
            {hidden > 0 && (
              <button
                type="button"
                className={`room__more${showAll ? " is-open" : ""}`}
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Згорнути" : `Показати все (+${hidden})`}
                <ChevronDown size={16} aria-hidden="true" />
              </button>
            )}
          </>
        )}

        {room.software.length > 0 && (
          <>
            <h4><Monitor size={17} aria-hidden="true" /> Програмне забезпечення</h4>
            <ul className="room__chips room__chips--software">
              {room.software.map((s) => <li key={s}>{s}</li>)}
              {room.internet && <li className="is-internet"><Globe size={13} aria-hidden="true" /> Доступ до Інтернету</li>}
            </ul>
          </>
        )}

        {room.disciplines.length > 0 && (
          <>
            <h4><DoorOpen size={17} aria-hidden="true" /> Заняття з дисциплін</h4>
            <ul className="room__chips">
              {room.disciplines.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </>
        )}
      </div>
    </article>
  );
};

const Resources = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? resources : resources.filter((r) => r.type === filter);
  const totalArea = resources.reduce((sum, r) => sum + (r.area ?? 0), 0);

  const stats = [
    { value: resources.length, label: "кабінетів, лабораторій і майстерень" },
    { value: `${Math.round(totalArea)} м²`, label: "навчальних площ" },
    { value: 27, label: "комп’ютерів у спеціалізованих кабінетах" },
    { value: 2, label: "роботи — колаборативний і промисловий" },
  ];

  const scrollToRoom = (id) => {
    setFilter("all");
    // даємо React перемалювати список, потім прокручуємо
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <section className="resources">
      <h2>Матеріально-технічна база ЦК</h2>
      <p className="resources__intro">
        Підготовка фахівців з машинобудування забезпечується сучасними кабінетами,
        лабораторіями та майстернями: від комп’ютерного проєктування і програмування
        верстатів з ЧПК до 3D-друку, робототехніки та практичної металообробки.
      </p>
      <p className="resources__address">
        <MapPin size={16} aria-hidden="true" /> {resourceAddress}
      </p>

      <ul className="resources__stats">
        {stats.map((s) => (
          <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
        ))}
      </ul>

      <h3 className="resources__subtitle">Сучасне обладнання</h3>
      <ul className="resources__highlights">
        {resourceHighlights.map((h) => {
          const Icon = highlightIcons[h.icon] ?? Building2;
          return (
            <li key={h.title}>
              <button type="button" onClick={() => scrollToRoom(h.room)}>
                <Icon className="resources__highlight-icon" size={30} aria-hidden="true" />
                <strong>{h.title}</strong>
                <span>{h.text}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <h3 className="resources__subtitle">Приміщення</h3>
      <div className="resources__filter" role="tablist">
        {[["all", "Усі"], ...Object.entries(resourceTypes)].map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={filter === key ? "is-active" : ""}
            onClick={() => setFilter(key)}
          >
            {label}
            <span>{key === "all" ? resources.length : resources.filter((r) => r.type === key).length}</span>
          </button>
        ))}
      </div>

      <div className="resources__list">
        {filtered.map((room) => <RoomCard room={room} key={room.id} />)}
      </div>
    </section>
  );
};

export default Resources;

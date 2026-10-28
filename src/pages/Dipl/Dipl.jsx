import React, { useState } from 'react'
import {
  CheckCircle2, ChevronDown, Download, ExternalLink, FileText, PencilRuler, UsersRound,
} from 'lucide-react'
import {
  diplomaGuide, diplomaFacts, diplomaRoadmap, diplomaStructure,
  diplomaDrawings, diplomaSoftware, diplomaDocuments,
} from '../../mockups/diploma'
import "./Dipl.scss"

export const Dipl = () => {
  const [openSection, setOpenSection] = useState(0);

  return (
    <section className='section-container diploma'>
      <h2 className='title'>Виконання кваліфікаційної роботи у вигляді дипломного проєкту</h2>
      <p className='diploma__intro'>
        Кваліфікаційна робота — завершальний етап підготовки фахового молодшого бакалавра.
        Здобувач освіти розробляє технологічний процес виготовлення деталі в умовах реального
        виробництва та демонструє вміння приймати обґрунтовані інженерні рішення.
      </p>

      {/* ---------- Методичка ---------- */}
      <div className='diploma__guide'>
        <div className='diploma__guide-icon'>
          <FileText size={40} aria-hidden='true' />
          <span>PDF</span>
        </div>
        <div className='diploma__guide-body'>
          <h3>{diplomaGuide.title}</h3>
          <p>{diplomaGuide.audience}</p>
          <p className='diploma__guide-authors'>
            <UsersRound size={16} aria-hidden='true' />
            Укладачі: {diplomaGuide.authors.join(', ')}
          </p>
          <p className='diploma__guide-meta'>
            {diplomaGuide.year} · {diplomaGuide.pages} с. · {diplomaGuide.size}
          </p>
        </div>
        <div className='diploma__guide-actions'>
          <a href={diplomaGuide.file} target='_blank' rel='noopener noreferrer'>
            <ExternalLink size={16} aria-hidden='true' /> Переглянути
          </a>
          <a href={diplomaGuide.file} download className='is-secondary'>
            <Download size={16} aria-hidden='true' /> Завантажити
          </a>
        </div>
      </div>

      {/* ---------- Ключові показники ---------- */}
      <ul className='diploma__facts'>
        {diplomaFacts.map((f) => (
          <li key={f.label}>
            <strong>{f.value}</strong>
            <span className='diploma__facts-unit'>{f.unit}</span>
            <span className='diploma__facts-label'>{f.label}</span>
          </li>
        ))}
      </ul>

      {/* ---------- Шлях до захисту ---------- */}
      <h3 className='diploma__subtitle'>Шлях до захисту</h3>
      <ol className='diploma__roadmap'>
        {diplomaRoadmap.map((step, index) => (
          <li key={step.title}>
            <span className='diploma__roadmap-num'>{index + 1}</span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>

      {/* ---------- Структура ПЗ + графічна частина ---------- */}
      <div className='diploma__columns'>
        <div>
          <h3 className='diploma__subtitle'>Пояснювальна записка</h3>
          <ul className='diploma__structure'>
            {diplomaStructure.map((section, index) => {
              const isOpen = openSection === index;
              return (
                <li key={section.title} className={isOpen ? 'is-open' : ''}>
                  <button
                    type='button'
                    onClick={() => setOpenSection(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className='diploma__structure-num'>{index + 1}</span>
                    <span className='diploma__structure-title'>{section.title}</span>
                    <ChevronDown size={20} aria-hidden='true' />
                  </button>
                  {isOpen && (
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <p className='diploma__note'>
            Також: титульний аркуш, завдання, вступ, висновок, перелік посилань,
            специфікація на пристосування, додатки.
          </p>
        </div>

        <div>
          <h3 className='diploma__subtitle'>Графічна частина</h3>
          <ul className='diploma__drawings'>
            {diplomaDrawings.map((d) => (
              <li key={d.title}>
                <PencilRuler size={20} aria-hidden='true' />
                <span>{d.title}</span>
                <span className={`diploma__format diploma__format--${d.format === 'А1' ? 'a1' : 'a2'}`}>
                  {d.format}
                </span>
              </li>
            ))}
          </ul>
          <p className='diploma__note'>
            Виконується в: {diplomaSoftware.join(', ')}.
          </p>

          <h3 className='diploma__subtitle'>Документи на захист</h3>
          <ul className='diploma__docs'>
            {diplomaDocuments.map((doc) => (
              <li key={doc}>
                <CheckCircle2 size={20} aria-hidden='true' />
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className='diploma__result'>
        За результатами захисту здобувачу освіти присвоюється освітньо-професійний ступінь
        <strong> фаховий молодший бакалавр</strong>.
      </p>
    </section>
  )
}
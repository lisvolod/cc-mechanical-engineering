import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpenCheck, ChevronDown, Clock, ClipboardCheck, FileText, Handshake } from 'lucide-react'
import practices from '../../mockups/practices'
import "./Practics.scss"

export const Practics = () => {
  const [open, setOpen] = useState(null);

  const totalHours = practices.reduce((sum, p) => sum + p.hours, 0);

  return (
    <section className='section-container practices'>
      <h2 className='title'>Практики</h2>
      <p className='practices__intro'>
        Практична підготовка — наскрізна складова освітньої програми: від перших
        навичок роботи на верстатах у навчальних майстернях до передатестаційної
        практики на підприємстві, під час якої збираються матеріали для
        кваліфікаційної роботи.
      </p>

      <ul className='practices__summary'>
        <li><strong>{practices.length}</strong><span>практики</span></li>
        <li><strong>{totalHours}</strong><span>годин практичної підготовки</span></li>
        <li>
          <Handshake size={26} aria-hidden='true' />
          <Link to='/stakeholders'>Бази практики — наші стейкхолдери</Link>
        </li>
      </ul>

      <ol className='practices__timeline'>
        {practices.map((p, index) => {
          const isOpen = open === index;
          return (
            <li className='practices__item' key={p.title}>
              <span className='practices__step' aria-hidden='true'>{index + 1}</span>

              <article className='practices__card'>
                <h3>{p.title}</h3>
                <p className='practices__goal'>{p.goal}</p>

                <div className='practices__meta'>
                  <span><Clock size={16} aria-hidden='true' /> {p.hours} год.</span>
                  <span><ClipboardCheck size={16} aria-hidden='true' /> {p.control}</span>
                  <span className='practices__specialty'>{p.specialty}</span>
                </div>

                <button
                  type='button'
                  className={`practices__toggle${isOpen ? ' is-open' : ''}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  Зміст практики
                  <ChevronDown size={18} aria-hidden='true' />
                </button>

                {isOpen && (
                  <table className='practices__topics'>
                    <thead>
                      <tr><th>Тема</th><th>Годин</th></tr>
                    </thead>
                    <tbody>
                      {p.topics.map(([topic, hours]) => (
                        <tr key={topic}><td>{topic}</td><td>{hours}</td></tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr><td>Усього</td><td>{p.hours}</td></tr>
                    </tfoot>
                  </table>
                )}

                <div className='practices__actions'>
                  <a href={p.program} target='_blank' rel='noopener noreferrer'>
                    <FileText size={16} aria-hidden='true' /> Програма практики (PDF)
                  </a>
                  {p.guide && (
                    <a href={p.guide} target='_blank' rel='noopener noreferrer' className='is-secondary'>
                      <BookOpenCheck size={16} aria-hidden='true' /> Методичні вказівки
                    </a>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  )
}
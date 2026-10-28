import React from 'react'
import { Download, ExternalLink, FileText, MonitorPlay, UserRound } from 'lucide-react'
import courseWorks from '../../mockups/courseWorks'
import "./Course.scss"

export const Course = () => {
  return (
    <section className='section-container course-works'>
      <h2 className='title'>Методичні рекомендації до виконання курсових робіт (проєктів)</h2>
      <p className='course-works__intro'>
        Методичні вказівки містять мету та завдання курсового проєктування, вимоги
        до структури й оформлення пояснювальної записки та графічної частини,
        критерії оцінювання і порядок захисту.
      </p>

      <ul className='course-works__list'>
        {courseWorks.map((item) => {
          const isFile = Boolean(item.file);
          const Icon = isFile ? FileText : MonitorPlay;
          const meta = [item.year, item.pages && `${item.pages} с.`, item.size].filter(Boolean);

          return (
            <li className='course-works__card' key={item.discipline}>
              <div className={`course-works__icon${isFile ? '' : ' course-works__icon--moodle'}`}>
                <Icon size={34} aria-hidden='true' />
                <span>{isFile ? 'PDF' : 'Moodle'}</span>
              </div>

              <div className='course-works__body'>
                <span className='course-works__type'>{item.type}</span>
                <h3>«{item.discipline}»</h3>

                {item.author && (
                  <p className='course-works__author'>
                    <UserRound size={16} aria-hidden='true' />
                    Укладач: {item.author}
                  </p>
                )}

                {meta.length > 0 && <p className='course-works__meta'>{meta.join(' · ')}</p>}

                <div className='course-works__actions'>
                  {isFile ? (
                    <>
                      <a href={item.file} target='_blank' rel='noopener noreferrer'>
                        <ExternalLink size={16} aria-hidden='true' /> Переглянути
                      </a>
                      <a href={item.file} download className='is-secondary'>
                        <Download size={16} aria-hidden='true' /> Завантажити
                      </a>
                    </>
                  ) : (
                    <a href={item.url} target='_blank' rel='noopener noreferrer'>
                      <ExternalLink size={16} aria-hidden='true' /> Перейти до курсу
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  )
}
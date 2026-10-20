import React, { useState } from 'react'
import { BookOpen, ExternalLink, Search } from 'lucide-react'
import disciplines from '../../mockups/disciplines'
import "./Disciplines.scss"

export const Disciplines = () => {
  const [query, setQuery] = useState('');

  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? disciplines.filter(({ name }) => name.toLowerCase().includes(normalized))
    : disciplines;

  return (
    <section className='section-container disciplines'>
      <h2 className='title'>Дисципліни (силабуси)</h2>
      <p className='disciplines__intro'>
        Навчальні дисципліни освітньої програми. Посилання ведуть на курси
        в системі дистанційного навчання коледжу, де розміщені силабуси
        та навчально-методичні матеріали.
      </p>

      <label className='disciplines__search'>
        <Search size={20} aria-hidden='true' />
        <input
          type='search'
          placeholder='Пошук дисципліни…'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label='Пошук дисципліни'
        />
      </label>

      <p className='disciplines__count'>
        Знайдено: {filtered.length} з {disciplines.length}
      </p>

      {filtered.length > 0 ? (
        <ul className='disciplines__list'>
          {filtered.map(({ name, url }) => (
            <li key={url}>
              <a
                className='disciplines__item'
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <BookOpen className='disciplines__icon' size={22} aria-hidden='true' />
                <span className='disciplines__name'>{name}</span>
                <ExternalLink className='disciplines__external' size={16} aria-hidden='true' />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className='disciplines__empty'>За запитом «{query}» нічого не знайдено.</p>
      )}
    </section>
  )
}


// import React from 'react'
// import GoogleSheetLinks from '../../components/GoogleSheetLinks/GoogleSheetLinks'
// import "./Disciplines.scss"

// export const Disciplines = () => {
//   return (
//     <section className='section-container'>
//         {/* <div className="sub-section">
//             <h2 className='title'>Дисципліни (силабуси)</h2>
//             <GoogleSheetLinks sheetName={"disciplines"}/>
//         </div>
//         <div className="sub-section">
//             <h2 className='title'>Дисципліни за вибором здобувача</h2>
//             <GoogleSheetLinks sheetName={"choice"}/>
//         </div> */}
//     </section>
//   )
// }

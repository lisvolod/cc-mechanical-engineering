import React from 'react'
import { ExternalLink } from 'lucide-react'
import programs from '../../mockups/programs.JSX'
import "./Programs.scss"

export const Programs = () => {
  const sorted = [...programs].sort((a, b) => b.year - a.year);

  return (
    <section className='section-container programs'>
      <h2 className='title'>Освітньо-професійні програми</h2>
      <p className='programs__intro'>
        Освітньо-професійні програми підготовки фахових молодших бакалаврів,
        за якими навчаються здобувачі освіти циклової комісії машинобудівних технологій.
      </p>

      <ul className='programs__list'>
        {sorted.map((program) => (
          <li className='programs__card' key={program.year}>
            <span className='programs__year'>ОПП {program.year}</span>

            <h3 className='programs__name'>«{program.name}»</h3>

            <dl className='programs__details'>
              <div>
                <dt>Спеціальність</dt>
                <dd>{program.specialty}</dd>
              </div>
              <div>
                <dt>Галузь знань</dt>
                <dd>{program.field}</dd>
              </div>
              <div>
                <dt>Освітньо-професійний ступінь</dt>
                <dd>{program.degree}</dd>
              </div>
            </dl>

            <a
              className='programs__link'
              href={program.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              Переглянути ОПП
              <ExternalLink size={18} aria-hidden='true' />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}


// import React from 'react'
// import GoogleSheetLinks from '../../components/GoogleSheetLinks/GoogleSheetLinks'
// import "./Programs.scss"

// export const Programs = () => {
//   return (
//     <section className='section-container'>
//         <h2 className='title'>Освітньо-професійні програми</h2>
//         {/* <div className="sub-section">
//             <GoogleSheetLinks sheetName={"opp"}/>
//         </div> */}
//     </section>
//   )
// }

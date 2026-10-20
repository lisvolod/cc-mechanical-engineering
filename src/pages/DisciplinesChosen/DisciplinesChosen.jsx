import React from 'react'
import {
  ArrowRight, BookOpen, Briefcase, Cog, ExternalLink, GraduationCap, Route,
} from 'lucide-react'
import {
  electivesCourse, electivesSteps, electivesBenefits, electivesDisciplines,
} from '../../mockups/electives'
import "./DisciplinesChosen.scss"

const icons = { route: Route, cog: Cog, briefcase: Briefcase };

export const DisciplinesChosen = () => {
  return (
    <section className='section-container electives'>
      <h2 className='title'>Дисципліни за вибором здобувача освіти</h2>
      <p className='electives__intro'>
        Вибіркова складова освітньої програми дає змогу кожному здобувачу освіти
        сформувати власну освітню траєкторію — поглибити знання в обраному напрямі
        та набути додаткових професійних компетентностей.
      </p>

      {/* Головна картка-посилання на курс Moodle */}
      <a
        className='electives__hero'
        href={electivesCourse.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='electives__hero-icon'>
          <GraduationCap size={48} aria-hidden='true' />
        </div>
        <div className='electives__hero-body'>
          <span className='electives__hero-label'>Каталог у Moodle</span>
          <h3>{electivesCourse.title}</h3>
          <p>{electivesCourse.description}</p>
        </div>
        <span className='electives__hero-btn'>
          Перейти до курсу
          <ExternalLink size={18} aria-hidden='true' />
        </span>
      </a>

      {/* Якщо перелік дисциплін заповнено — показуємо каталог */}
      {electivesDisciplines.length > 0 && (
        <>
          <h3 className='electives__subtitle'>Каталог вибіркових дисциплін</h3>
          <ul className='electives__catalog'>
            {electivesDisciplines.map(({ name, url }) => (
              <li key={url}>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <BookOpen size={20} aria-hidden='true' />
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      <h3 className='electives__subtitle'>Як обрати дисципліни</h3>
      <ol className='electives__steps'>
        {electivesSteps.map((step, index) => (
          <li className='electives__step' key={step.title}>
            <span className='electives__step-num'>{index + 1}</span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
            {index < electivesSteps.length - 1 && (
              <ArrowRight className='electives__step-arrow' size={22} aria-hidden='true' />
            )}
          </li>
        ))}
      </ol>

      <h3 className='electives__subtitle'>Навіщо обирати</h3>
      <ul className='electives__benefits'>
        {electivesBenefits.map(({ icon, title, text }) => {
          const Icon = icons[icon] ?? Cog;
          return (
            <li className='electives__benefit' key={title}>
              <Icon className='electives__benefit-icon' size={32} aria-hidden='true' />
              <h4>{title}</h4>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

// import React from 'react'
// import GoogleSheetLinks from '../../components/GoogleSheetLinks/GoogleSheetLinks'
// import "./DisciplinesChosen.scss"

// export const DisciplinesChosen = () => {
//   return (
//     <section className='section-container'>
//         {/* <div className="sub-section">
//             <h2 className='title'>Дисципліни за вибором здобувача освіти</h2>
//             <GoogleSheetLinks sheetName={"choice2"}/>
//         </div> */}
        
//     </section>
//   )
// }

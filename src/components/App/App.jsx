import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer.jsx"
import Main from "../../pages/Main/Main.jsx"
import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx"
import "./App.scss"
import History from "../../pages/History/History.jsx";
import Teams from "../../pages/Teams/Teams.jsx";
import Qualification from "../../pages/Qualification/Qualification.jsx";
import Resources from "../../pages/Resources/Resources.jsx";
import Speciality from "../../pages/Speciality/Speciality.jsx";
import Stakeholders from "../../pages/Stakeholders/Stakeholders.jsx";
import Graduates from "../../pages/Graduates/Graduates.jsx";
import { Programs } from "../../pages/Programs/Programs.jsx";
import { Disciplines } from "../../pages/Disciplines/Disciplines.jsx";
import { DisciplinesChosen } from "../../pages/DisciplinesChosen/DisciplinesChosen.jsx";
import { Course } from "../../pages/Course/Course.jsx";
import { Dipl } from "../../pages/Dipl/Dipl.jsx";
import { Practics } from "../../pages/Practics/Practics.jsx";
import { Achievements } from "../../pages/Achievements/Achievements.jsx";
import { Leisure } from "../../pages/Leisure/Leisure.jsx";
import Contacts from "../../pages/Contacts/Contacts.jsx";
import ScrollToTop from "../../utils/ScrollToTop.jsx";

function App() {

  return (
    <>
      <ScrollToTop/>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/qualification" element={<Qualification/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/speciality" element={<Speciality/>} />
        <Route path="/stakeholders" element={<Stakeholders/>} />
        <Route path="/graduates" element={<Graduates/>} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/disciplines" element={<Disciplines/>} />
        <Route path="/chosen" element={<DisciplinesChosen/>} />
        <Route path="/kr-methodology" element={<Course/>} />
        <Route path="/dp-methodology" element={<Dipl/>} />
        <Route path="/practices" element={<Practics/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/leisure" element={<Leisure/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

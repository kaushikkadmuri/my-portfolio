import './App.css';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import HomeSection from './components/HomeSection.jsx';
import Sidebar from './components/Sidebar.jsx'; 
import ProjectsSection from './components/ProjectsSection.jsx';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import Hamburger from './components/Hamburger.jsx';
import HorizontalNavbar from './components/HorizontalNavbar.jsx';

function App() {

  return(
    <>
    <Sidebar />
    <ScrollToTop />
    <HorizontalNavbar/>
    <Routes>
      {/* <Route path='/my-portfolio' element={<HomeSection/>} /> */}
      <Route path='/' element={<HomeSection/>} />
      <Route path='/home' element={<HomeSection />} />
      <Route path='/about' element={<AboutSection />} />
      <Route path='/projects' element={<ProjectsSection />} />
      <Route path='/contact' element={<ContactSection />} />
    </Routes>
    {/* <HomeSection /> */}
    {/* <AboutSection />
    <ProjectsSection />
    <ContactSection /> */}
    </>
  );
}

export default App;

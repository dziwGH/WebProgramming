import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Education from './pages/Education.jsx';
import Contact from './pages/Contact.jsx';
import './tailwind.css'

function App() {
  return (
    <Router>
      <div className="mx-auto p-4 bg-[#284b63]">
      <nav className="p-4 bg-[#353535] flex flex-wrap justify-center gap-6 rounded-lg items-center text-xl font-semibold text-[#ffffff] text-center">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/education">Education</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import ParticleBackground from './Particle';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { projects } from '../data/projects';
import { services } from '../data/services';
import Experience from './Experience';
import Services from './Services';
function App() {
  return (
    <>
      <ParticleBackground /> 
      <div className='relative z-10'>
        <Navbar />
        <Home />
        <About />
        <Services services={services}/>
        <Experience />
        <Projects projects={projects}/>
        <Contact />
        <div className='p-2 text-center'>  &copy; 2025 Anis Zarrouk. All rights reserved </div>
      </div>

    </>
  );
}

export default App;

import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import ParticleBackground from './Particle';
import About from './About';
import Projects from './Projects';
import Contact from './Footer';
import { projects } from '../data/projects';
import { services } from '../data/services';
import Experience from './Experience';
import Services from './Services';
import Footer from './Footer';
import Posts from './Posts';
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
        <Posts />
        <Footer />
      </div>
    </>
  );
}

export default App;

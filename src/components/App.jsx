import '../styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import ParticleBackground from './Particle';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
function App() {
  const projects = [
    {
      id: 1,
      projectImg: require('../assets/project_1.png'),
      name: 'Blog',
      desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',
      category:'Web App'
    },
    {
      id: 2,
      projectImg: require('../assets/food_delivery_app.png'),
      name: 'Food Delivery App',
      desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',
      category:'Web App'
    },
    {
      id: 3,
      projectImg: require('../assets/youtube_clone.png'),
      name: 'Youtube Clone',
      desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',
      category:'Web App'
    },
    {
      id: 4,
      projectImg: require('../assets/youtube_clone.png'),
      name: 'News App',
      desc:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m',
      category:'Mobile App'
    }
  ];
  return (
    <>
      <ParticleBackground /> 
      <div className='relative z-10'>
        <Navbar />
        <Home />
        <About />
        <Projects projects={projects}/>
        <Contact />
        <div className='p-2 text-center'>  &copy; 2025 Anis Zarrouk. All rights reserved </div>
      </div>

    </>
  );
}

export default App;

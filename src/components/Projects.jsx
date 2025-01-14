import React from 'react'
import project_1 from '../assets/project_1.png';
import project_2 from '../assets/food_delivery_app.png';
import project_3 from '../assets/youtube_clone.png';
import github  from '../assets/github.png';
import '../styles/Projects.css';
const Projects = ({projects}) => {
  
  return (
    <div id='projects' className='projects-section  py-10'>
        <div className='container mx-auto p-4'>
            <h2 className='text-left mb-8 w-50 uppercase text-3xl text-center  font-bold'>My Projects</h2>
            <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              { projects.length>0 && projects.map( project => (
                <div className='border border-red-500 rounded-lg bg-red-50 hover:scale-110 transition-transform duration-500 cursor-pointer'>
                <img src={project.projectImg} alt='first project' />
                <div className='p-4' >
                    <h2 className='mb-4 font-semibold text-xl'>{project.name}</h2>
                    <p className='text-xl'>{project.desc}</p>
                    <div className='flex gap-2'>
                       <button className='bg-red-500 text-white rounded p-2 mt-4'>Live Preview</button>
                       <button className='bg-black text-white rounded p-2 mt-4'>
                      <div className='flex items-center'><img src={github} width={20} height={20} alt='github' className='text-white mr-2'/> Github Link </div></button>
                    </div>
                </div>
              </div>
              )) }
            </div>
        </div>
    </div>
  )
}

export default Projects

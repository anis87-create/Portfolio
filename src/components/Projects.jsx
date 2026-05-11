import React, { useEffect, useState } from 'react'
import github from '../assets/github.png';
import '../styles/Projects.css';
import ProjectItem from './ProjectItem';
const Projects = ({projects}) => {
  
  const items = ['All','WebApp', 'MobileApp'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectItems, setProjectItems] = useState(projects);
  const onClick = (index) => {
    setActiveIndex(index);
  }
  useEffect(() => {
      if(activeIndex===1){
        setProjectItems(projects.filter(project => project.category === 'Web App'));
      }else if(activeIndex === 2){
        setProjectItems(projects.filter(project => project.category=== 'Mobile App'))
      }else {
        setProjectItems(projects)
      }
  },[projects, activeIndex]);
  return (
    <section id='projects' className='section  py-10'>
        <div className='container mx-auto p-4'>
            <h2 className='text-left mb-8 w-50 uppercase text-3xl   font-bold section_title'>My Projects</h2>
            <div className='flex'>
            {items.map((item, index) => (
              <ProjectItem 
                  key={index}
                  name={item}
                  onClick={() => onClick(index)}
                  isActive={activeIndex === index}
              />
            ))}
       
        </div>  
            <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              { projectItems.length>0 && projectItems.map( project => (
                <div className='border border-red-500 rounded-lg bg-red-50 hover:scale-110 transition-transform duration-500 cursor-pointer'>
                <img src={project.projectImg} alt='first project' />
                <div className='p-4' >
                    <h2 className='mb-4 font-semibold text-xl'>{project.name}</h2>
                    <p className='text-sm text-gray-600 mb-3'>{project.desc}</p>
                    {project.tags && (
                      <div className='flex flex-wrap gap-1 mb-2'>
                        {project.tags.map(tag => (
                          <span key={tag} className='px-2 py-0.5 text-xs bg-red-100 text-red-700 rounded-full'>{tag}</span>
                        ))}
                      </div>
                    )}
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
    </section>
  )
}

export default Projects

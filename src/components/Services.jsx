import React from 'react'
import '../styles/Services.css';
const Services = ({services}) => {

  return (
    <section id='services' className='mx-auto container section' >
     <h2 className='text-center md:text-left text-3xl font-bold uppercase mb-10 section_title'>Services</h2>   
     <div className=' flex flex-col  md:flex-row   items-center   w-[800px] rounded-2xl w-full'>
  {services.map(({ title, image, description }, index) => (
    <div key={index} className={`hover:-translate-y-2 transition-transform p-8 text-center mx-4 mr-4 border rounded-2xl ${index === 0 ? 'bg-indigo-400':'bg-yellow-400'}`}
    >
      <div className='flex justify-center'>
        <img src={image} alt='' className='text-center mb-4' />
      </div>
      <h3 className={`text-2xl mb-4 font-bold  ${index === 0 ? 'text-white':'text-black'}`}>{title}</h3>
      <p className={ `${index === 0 ? 'text-white':'text-black'}`}>{description}</p>
    </div>
  ))}
     </div>
    </section>
  )
}

export default Services

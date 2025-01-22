import React from 'react'
import '../styles/Services.css';
const Services = ({services}) => {

  return (
    <section id='services' className='mx-auto container services-section'>
     <h2 className='text-3xl font-bold uppercase mb-4 text-center'>Services</h2>   
     <div className='flex items-center   w-[800px] rounded-2xl'>
  {services.map(({ title, image, description }, index) => (
    <div key={index} className={`p-8 text-center mx-4 mr-4 border rounded-2xl ${index === 0 ? 'bg-blue-500':'bg-red-200'}`}
    >
      <div className='flex justify-center'>
        <img src={image} alt='' className='text-center mb-4' />
      </div>
      <h3 className={`text-2xl mb-4 font-bold ${index === 0 ? 'text-white':'text-black'}`}>{title}</h3>
      <p className={ `${index === 0 ? 'text-white':'text-black'}`}>{description}</p>
    </div>
  ))}
</div>
    </section>
  )
}

export default Services

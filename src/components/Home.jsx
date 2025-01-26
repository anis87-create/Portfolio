import React from 'react'
import image from '../assets/profil_without_background.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github  from '../assets/github.png';
import '../styles/Home.css';
const Home = () => {
  return (
    <section id='home' className='container mx-auto p-5 text-left  flex items-center justify-between bg-fixed h-400'>
      <div className='md:w-50 lg:text-left md:text-center  sm:text-center text-sm'> 
        <h1 className='text-7xl  font-bold  lg:leading-snug text-gray-900 sm:mb-8'>Hi There,<br /> I'm Anis <span className='text-red-500'>Zarrouk</span> </h1>
        <h2 className='md:text-2xl text-xl mb-4 mt-4  sm:mb-8'>Full stack <span className='bg-yellow-200 p-4 font-bold text-2xl uppercase'>js</span> Developer</h2>
        <p className='mb-4 mt-4  w-[600px] sm:mb-4'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems</p>
        <button className='bg-black text-white p-4 rounded-lg hover:opacity-4'>Download <span className='uppercase'>cv</span></button>
      </div>
      <div className='w-50 hidden sm:block'>
        <img src={image} alt='My pictur' className="lg:h-[50vh] h-96"/>
      </div>
      <div class="flex flex-col h-30 justify-center bg-gray-200 p-4 rounded-full md:block">
        <a href='https://www.facebook.com/anis.zarrouk.73/' target="_blank" rel="noreferrer"><img src={facebook} alt="" class="w-20"></img></a>
        <a href='https://www.linkedin.com/in/anis-zarrouk-2b5b28246/' target='_blank' rel="noreferrer"><img src={linkedin} alt="" class="w-20"></img></a>
        <a href='https://github.com/anis87-create' target='_blank' rel="noreferrer"><img src={github} alt="" class="w-20" ></img></a>
     </div>

    </section>
  )
}

export default Home;

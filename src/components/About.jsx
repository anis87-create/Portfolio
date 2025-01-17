import React from 'react'
import '../styles/About.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
const About = () => {
  return (
    <section id='about' className='about-section py-10'>
        <div className='container mx-auto p-4  text-3xl font-bold'>
            <h2 className='text-center mb-8 w-50 uppercase sm:block'>About me</h2>
            <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col flex-1 mb-6 md:mb-0'>
              <h2 className='font-bold text-2xl sm:text-3xl mb-4'>Know More About Me</h2>
              <p className='text-base sm:text-lg text-gray-600 leading-7 font-light'>
                Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. I also run a YouTube channel where I teach Javascript, MERN Stack development, Wordpress, and digital Marketing, helping others dive deep into the world of programming and technology.
              </p>
            </div>

            <div className='text-left text-base sm:text-xl flex-1 w-full md:w-auto border border-red-200 rounded-lg p-3'>
              <h3 className='text-xl sm:text-2xl font-semibold text-red-600 text-center mb-4'>Skills & Expertise</h3>
              <div className='flex items-center mb-4'>
                <img src={html} alt='html' className='w-12 h-12 sm:w-20 sm:h-20' />
                <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
                  <div className='bg-red-500 h-4 rounded-full animate-progress' style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className='flex items-center mb-4'>
                <img src={css} alt='css' className='w-12 h-12 sm:w-16 sm:h-16' />
                <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
                  <div className='bg-red-500 h-4 rounded-full animate-progress' style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className='flex items-center mb-4'>
                <img src={js} alt='js' className='w-12 h-12 sm:w-16 sm:h-16' />
                <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
                  <div className='bg-red-500 h-4 rounded-full animate-progress' style={{ width: '70%' }}></div>
                </div>
              </div>

              <div className='flex items-center mb-4'>
                <img src={react} alt='react' className='w-12 h-12 sm:w-16 sm:h-16' />
                <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
                  <div className='bg-red-500 h-4 rounded-full animate-progress' style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className='flex items-center mb-4'>
                <img src={redux} alt='redux' className='w-12 h-12 sm:w-16 sm:h-16' />
                <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
                  <div className='bg-red-500 h-4 rounded-full animate-progress' style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className='flex items-center mb-4'>
                <img src={node} alt='node' className='w-12 h-12 sm:w-16 sm:h-16' />
                <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
                  <div className='bg-red-500 h-4 rounded-full animate-progress' style={{ width: '50%' }}></div>
                </div>
              </div>

              <div className='flex items-center mb-4'>
                <img src={express} alt='express' className='w-12 h-12 sm:w-16 sm:h-16' />
                <div className='w-full bg-gray-200 rounded-full h-4 ml-4'>
                  <div className='bg-red-500 h-4 rounded-full animate-progress' style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
            </div>

        </div>
    </section>
  )
}

export default About

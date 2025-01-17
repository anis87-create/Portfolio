import React from 'react'
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';
const Contact = () => {
  return (
    <section id='contact' className='bg-gray-800 p-5'>
        <div className='container mx-auto p-2 text-left text-white'>
         
            <h2 className='font-bold text-3xl mb-4'>Get In Touch</h2>
            <p>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
            <p></p>
           
            <div className='flex justify-between'>  
               <Lottie  animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
               <form className='hidden md:block  p-10 bg-white w-[600px] h-[450px] rounded-2xl  shadow-lg shadow-red-500'>
                  <h3 className='font-bold text-black text-4xl'>Contact Me</h3>
                  <div class="sm:col-span-4 mt-4">
                  <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
                   <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Full Name" />
                    </div>
                  </div>
                  <div class="sm:col-span-4 mt-4">
                  <label for="username" class="block text-sm/6 font-medium text-gray-900">Email</label>
                   <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="Email" />
                    </div>
                  </div>
                  </div>
                  <div class="md-block sm:col-span-4 mt-4">
                    <label for="username" class="block text-sm/6 font-medium text-gray-900">Message</label>
                      <textarea name="about" id="about" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                    </div>
                    <button className='bg-red-400 text-white p-2 mt-3 rounded-xl'>Send Message</button>
                  </div>
               </form>
            </div> 
        </div>
    </section>
  )
}

export default Contact

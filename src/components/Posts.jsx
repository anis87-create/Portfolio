import React from 'react'
import {posts} from '../data/posts';

const Posts = () => {
  return (
    <section id='posts' className='mx-auto container p-4'>
        <h2 className='section_title font-bold text-3xl text-left mb-8'>Latest Posts</h2>
   
        <div className='flex flex-col md:flex-row shadow'>
        {posts.map((post, index) => <div 
        key={index}
        className='mr-4 border-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:translate-x-3 hover:rotate-3'
        >
          <div className="relative">
               <span className="absolute top-0 left-0 bg-red-500 p-2 text-white">{post.category}</span>
            </div>
            <a href={post.link} target='_blank' rel='noreferrer'>
              <div class="w-full max-w-sm mx-auto ">
               <img src={post.image} alt='' />
               </div>
            </a>
            <div className='p-4'>
                <h3 className='font-bold'>{post.name}</h3> <br/>
                <span>{post.date}</span>
            </div>    
        </div>)}
       </div> 
    </section>
  )
}

export default Posts

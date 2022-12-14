import React from 'react'
import AlofPizza from '../assets/AlofPizzeria.png'
import FolaBlog from '../assets/folablog.png'
import Elearning from '../assets/E-learning.png'

const Projects = () => {
    return (
        <div name='projects'  className='bg-[#08192f] sm:w-full md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-400'>Projects</p>
                    <p className='py-6'>Check out my recent works</p>
                </div>

{/* hover */}
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 '>
                {/* first project */}
                    
                    <div style={{backgroundImage: `url(${Elearning})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Applicaton
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='http://e-learnningapp.netlify.app/' target="_blank" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-blue-400 hover:text-white'>Demo</button>
                                </a>
                                <a href='https://github.com/Folanuel/E-learningapp' target="_blank" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-blue-400 hover:text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${FolaBlog})`}} 
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Next Js Applicaton
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://fola-dev.vercel.app/' target="_blank" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-blue-400 hover:text-white'>Demo</button>
                                </a>
                                <a href='https://github.com/Folanuel/my-blog' target="_blank" >
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-blue-400 hover:text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
}

export default Projects
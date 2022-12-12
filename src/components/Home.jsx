import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link} from 'react-scroll'
import Typed from 'react-typed';


export const Home = () => {
    return (
    <div name= 'home' className='w-full h-screen bg-[#08192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-blue-400 sm:text-2xl'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Folarin </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#455263]' >
            <Typed
                    strings={['I am a Front End Developer.']}
                    typeSpeed={150}
                    backSpeed={150}
                    loop
                /></h2>
            <p className='text-gray-200 max-w-[700px]'>Specializing in building exceptional digital experiences, focused on buiding responsive Front End web applications.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-blue-400 hover:border-blue-400'> 
                <Link  to="projects" smooth={true} duration={500}>
                    View Projects 
                </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-4'/>
                </span>
                </button>
            </div>

        </div>

    </div>
    )
}

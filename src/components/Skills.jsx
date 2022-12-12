import React from 'react'
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/JavaScript.png';
import ReactImg from '../assets/React.png';
import Node from '../assets/Node.png';
import FireBase from '../assets/FireBase.png';
import GitHub from '../assets/GitHub.png';
import Tailwind from '../assets/Tailwind.png';
import Mongo from '../assets/Mongo.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#08192f] text-gray-300'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Skills</p>
                    <p className='py-4'>These are the tech stack i have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={HTML} alt='Html5' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={CSS} alt='Html5' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={JavaScript} alt='Html5' />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={Node} alt='Html5' />
                        <p className='my-4'>Node Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={ReactImg} alt='Html5' />
                        <p className='my-4'>React Js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={Tailwind} alt='Html5' />
                        <p className='my-4'>Tailwind Css</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={GitHub} alt='Html5' />
                        <p className='my-4'>GitHub</p>
                    </div>
                    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={Mongo} alt='Html5' />
                        <p className='my-4'>Mongodb</p>
                    </div> */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={FireBase} alt='Html5' />
                        <p className='my-4'>FireBase</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
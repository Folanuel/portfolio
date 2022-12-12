import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='bg-[#08192f] flex justify-ceneter items-center p-4'>
            <form method='POST' action='https://getform.io/f/f97a0413-f7d5-41b7-b420-00acae39d18e' className='flex flex-col max-w-[600px] w-full mx-auto'>
                <div className='pb-8 md:mx-auto justify-conter items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-400 text-gray-300 '>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or send me an email</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]'  type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-blue-400 px-4 py-3 my-8 mx-auto flex items-center'>Lets collaborate</button>
            </form>
        </div>
    )
}

export default Contact
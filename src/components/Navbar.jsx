import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll'


export const Navbar = () => {
  const [nav, setNav] = useState(false)
  

  const handleClick = () => {
    setNav(!nav)
  }
  

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#02070d] text-gray-300'>
    <div>
      <img src={Logo} alt='Logo' style={{width: '50px'}}/>
    </div>

    {/* menu section */}
    
      <ul className='hidden md:flex '>
        <li >
          <Link className="hover:text-blue-400 hover:scale-110 duration-500" activeClass="active" spy={true} to="home" smooth={true} duration={500} offset={-100}>
          Home
          </Link>
        </li>
        <li >
          <Link className="hover:text-blue-400" activeClass="active" spy={true} to="about" smooth={true} duration={500} offset={-100}>
          About
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" activeClass="active" spy={true} to="skills" smooth={true} duration={500} offset={-100}>
          Skills
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" activeClass="active" spy={true} to="projects" smooth={true} duration={500} offset={-100}>
          Projects
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400" activeClass="active" spy={true} to="contact" smooth={true} duration={500} offset={-90} >
          Contact
          </Link>
        </li>
      </ul>
    


    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* menu for mobile */}
    <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>   
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
          Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
          </Link>
        </li>
      </ul>

    {/* icons */}
    <div className='hidden lg:flex fixed flex-col  top-[35%] left-0'>
    <ul>
      <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-blue-500'>
        <a className='flex justify-between items-center w-full text-grey-300 ' href='https://www.linkedin.com/in/folarin-adeniyi-1670a2162/' target="_blank">
          Linkedin <FaLinkedin size={30} />
        </a>
      </li>
      <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#be185d]'>
        <a className='flex justify-between items-center w-full text-grey-300 ' href='https://www.instagram.com/fola_codes/' target="_blank">
          Instagram <FaInstagram size={30} />
        </a>
      </li>
      <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-black'>
        <a className='flex justify-between items-center w-full text-grey-300 ' href='https://github.com/Folanuel' target="_blank">
          Github <FaGithub size={30} color= 'white' />
        </a>
      </li>
    </ul></div>
    
    
    </div>
  )
}

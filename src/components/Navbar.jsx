import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants/constants'
import { logo,menu,close } from '../assets'
import { useTheme } from '../contexts/ThemeContext'


const Navbar = () => {
  const [active,setActive] = useState('`');
  const [toggle,setToggle] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${isDarkMode ? 'bg-primary' : 'bg-light-primary shadow-lg'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/'
              className=' flex items-center gap-2'
              onClick={()=> {
                setActive("");
                window.scrollTo(0,0);
              }
        }>
        <img src = {logo} alt= 'logo' className=' w-9 h-9 object-contain'></img>
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-[18px] font-bold cursor-pointer flex`}> 
        Aman &nbsp;  <span className='sm:block hidden'>| Game Developer</span> </p>
        
      </Link>

      <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
             <li key={link.id} className={
              `${active === link.title ? (isDarkMode ? 'text-white' : 'text-gray-800') : (isDarkMode ? 'text-secondary' : 'text-light-secondary')}
              ${isDarkMode ? 'hover:text-white' : 'hover:text-gray-800'} text-[18px] font-medium cursor-pointer` 
             }
             onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`hidden sm:block ml-4 p-2 rounded-lg transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 hover:bg-gray-700 text-white' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        }`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <div className = 'sm:hidden flex flex-1 justify-end items-center gap-3'>
        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        <img src={toggle?close:menu}
         alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={()=>setToggle(!toggle)} />

        <div className={`${!toggle?'hidden':'flex'} p-6 ${isDarkMode ? 'black-gradient' : 'bg-light-primary border border-gray-200'} absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link)=>(
             <li key={link.id} className={
              `${active === link.title ? (isDarkMode ? 'text-white' : 'text-gray-800') : (isDarkMode ? 'text-secondary' : 'text-light-secondary')}
                font-poppins font-medium cursor-pointer text-[16px]` 
             }
             onClick={()=>{
                setToggle(!toggle);
                setActive(link.title);
                }
              }>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
      </ul>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
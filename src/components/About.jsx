import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion'
import { styles } from '../styles';
import { services } from '../constants/constants';
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { useTheme } from '../contexts/ThemeContext';

const ServiceCard = ({index,title,icon})=>{
  const { isDarkMode } = useTheme();
  
  return(
      <Tilt className='xs:w-[250px] w-full' options={{
        max:45,
        scale:1,
        speed:450
      }}>
          <motion.div variants= {fadeIn('right','spring', 0.5*index,1,0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
          <div className={`${isDarkMode ? 'bg-tertiary' : 'bg-light-tertiary'} rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
          >
            <img src={icon} alt={title}
            className='w-16 h-16 object-contain'/>
            <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-800'} text-[20px] font-bold text-center`}>{title}</h3>


          </div>
          </motion.div>
      </Tilt>
  )
}

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
    <motion.div variants={textVariant()}> 
      <p className={`${styles.sectionSubText} ${isDarkMode ? 'text-secondary' : 'text-light-secondary'}`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className={`mt-4 ${isDarkMode ? 'text-secondary' : 'text-light-secondary'} text-[17px] max-w-3xl leading-[30px]`}>
      I am a skilled software developer with experience in Unity game development, web technologies, and modern frameworks. With a passion for creating immersive digital experiences, I specialize in building interactive applications that combine creativity with technical excellence. 
      
      My expertise spans across game development using Unity and C#, front-end development with React and JavaScript, and various other technologies. I enjoy tackling complex problems and turning innovative ideas into reality through clean, efficient code. Whether it's developing engaging games, responsive web applications, or interactive experiences, I'm always eager to learn new technologies and push the boundaries of what's possible.
    </motion.p>

    <div className = 'mt-20 flex flex-wrap gap-10'>
      {
        services.map((service,index)=>(
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(About,'about')
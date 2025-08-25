import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { githubProjects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const GitHubProjectCard = ({
  index,
  name,
  description,
  tags,
  github_link,
  live_link,
  stars,
  forks
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] bg-black-100 rounded-2xl flex items-center justify-center'>
          {/* GitHub Project Visual */}
          <div className='w-full h-full flex flex-col items-center justify-center p-6'>
            <div className='w-16 h-16 rounded-full bg-gradient-to-r from-[#804dee] to-[#bf61ff] flex items-center justify-center mb-4'>
              <img
                src={github}
                alt='github'
                className='w-8 h-8 object-contain invert'
              />
            </div>
            <h3 className='text-white font-bold text-[18px] text-center mb-2'>{name}</h3>
            <div className='flex items-center gap-4 text-secondary text-[12px]'>
              <div className='flex items-center gap-1'>
                <span>⭐</span>
                <span>{stars}</span>
              </div>
              <div className='flex items-center gap-1'>
                <span>🔀</span>
                <span>{forks}</span>
              </div>
            </div>
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='flex gap-2'>
              {live_link && (
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                  title="Live Demo"
                >
                  <span className='text-white text-[12px]'>🌐</span>
                </div>
              )}
              <div
                onClick={() => window.open(github_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                title="View Source"
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <p className='mt-2 text-secondary text-[14px] leading-[20px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, tagIndex) => (
            <p
              key={`${name}-${tag.name}-${tagIndex}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const GitHubProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Open Source Contributions</p>
        <h2 className={`${styles.sectionHeadText}`}>GitHub Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of my open-source projects that demonstrate my technical skills 
          in game development, graphics programming, and software architecture. Each 
          project represents a unique challenge and showcases different aspects of my 
          expertise in Unity, C#, web technologies, and computer graphics.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {githubProjects.map((project, index) => (
          <GitHubProjectCard 
            key={`github-project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(GitHubProjects, "github");
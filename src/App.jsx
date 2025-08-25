import { BrowserRouter } from 'react-router-dom';
import {About,Contact,Experience,Hero,Navbar,Tech,Works,GitHubProjects,StarsCanvas,} from './components'
const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
         
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
            {/* <StarsCanvas /> */}
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <GitHubProjects />
          {/* <Feedbacks /> */}

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App

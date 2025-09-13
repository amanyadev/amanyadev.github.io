import { BrowserRouter } from 'react-router-dom';
import {About,Contact,Experience,Hero,Navbar,Tech,Works,GitHubProjects,StarsCanvas,} from './components'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

const AppContent = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <BrowserRouter>
      <div className={`relative z-0 transition-colors duration-300 ${isDarkMode ? 'bg-primary' : 'bg-light-primary'}`}>
       
        <div className={`${isDarkMode ? 'bg-hero-pattern' : ''} bg-cover bg-no-repeat bg-center`}>
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
  );
}

const App = () => {
  return(
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume'
import photos from './components/PhotoList'
import Modal from './components/Modal'
import PhotoList from './components/PhotoList';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Projects I have completed.',
    },
    { name: 'resume', description: 'View and download my resume!' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [portfolioSelected, setPortfolioSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Gallery photos={photos}>Portfolio Gallery </Gallery>      
          </>
        ) : (
          <ContactForm></ContactForm>
        )},
        {!resumeSelected ? (
          <>
          <Resume></Resume>

          </>
        ): ( 
          <Modal photos={photos}> Portfolio Gallery
          </Modal>
          )}
      </main>
    </div>
    
  );
}

export default App;
import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';

function App() {
  const pages = ['AboutMe', 'Portfolio', 'ContactMe', 'Resume'];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  function renderPage() {
    switch (currentpage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'ContactMe':
        return <ContactMe />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  }

  return (
    <div>
      <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
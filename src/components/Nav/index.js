import React, { useEffect } from 'react';

function Nav({ pages, currentPage, setCurrentPage }) {
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  return (
    <header>
      <h1 className='name'>Mol&Ram❣</h1>
      <nav>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <a
                href={`#${page.toLowerCase()}`}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? 'active' : ''}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

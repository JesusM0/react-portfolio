import React from 'react';

function Resume() {
  return (
    <section>
      <div className='left-side'>
        <h2 className='section-title'>Resume</h2>
      </div>
      <div className='resume'>
        <p>
          Check out my Resume using this{' '}
          <a href='https://drive.google.com/file/d/1JBkijPYHnZRhwCCYmgc51d1VfloktdQc/view?usp=sharing'>
            link!
          </a>{' '}
          It contains a list of my Web Dev skills!
        </p>
      </div>
    </section>
  );
}

export default Resume;

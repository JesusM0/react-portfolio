import React from 'react';

function Portfolio() {
  const projects = [
    {
      name: 'OtakuHQ',
      class: 'otaku',
      tech: 'MERN',
      link: 'https://otakuhq.herokuapp.com/',
    },
    {
      name: 'DC-Adopt',
      class: 'adopt',
      tech: 'Node, Express, Handlebars, MySQL',
      link: 'https://dc-adopt.herokuapp.com/',
    },
    {
      name: 'Covid-19 Interactive Map',
      class: 'covid',
      tech: 'HTML, CSS, JS',
      link: 'https://hannahbrijenkins.github.io/COVID19-Interactive-Map/',
    },
  ];

  return (
    <section id='projects-portfolio'>
      <div className='left-side'>
        <h2 className='section-title'>Portfolio</h2>
      </div>
      <div className='projects'>
        {projects.map((project, index) => (
          <a
            className={`project ${project.class}`}
            href={project.link}
            key={index}
          >
            <div className='project-description'>
              <h3 className='project-name'>{project.name}</h3>
              <p className='project-tech'>{project.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

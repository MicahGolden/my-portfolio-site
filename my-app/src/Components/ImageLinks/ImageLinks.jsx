import React, { useState } from 'react';
import './ImageLinks.css';
import projects from '../../Data/ProjectData.js';

const ImageLinks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProjects = projects.workProjects.concat(projects.personalProjects, projects.toys)
    .filter(project => {
      return project.languagesUsed.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()))
    });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="main-div">
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by language used..." />
      <h2>Projects</h2>
      <div className='image-grid'>
        {filteredProjects.map((project, index) => (
          <div className={`project-${index}`} key={`project-${index}`}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.languagesUsed.length > 0 &&
              <p>Languages Used: {project.languagesUsed.join(', ')}</p>
            }
            <a href={project.link}>Link</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageLinks;
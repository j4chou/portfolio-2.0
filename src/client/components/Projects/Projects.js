import React, { Component } from 'react';

import Scroll from 'react-scroll';
import { projectList } from './../../utils/projectData.js';

import './styles.css';
import './../../styles/app.css';

let Element = Scroll.Element;

class Projects extends Component {
  render() {
    return (
      <Element name="projects" className="projects section">
      <h1>Previous Work</h1>
        <div className="body">
            {
              projectList.map(project => {
                return (
                  <div className="project-list" key={project.title}>
                    <div className="project-image">
                        <img src={project.imagePath} alt={project.title} className="project-img" />
                    </div>
                    <div className="project-description">
                      <a href={project.url} key={project.title}>
                        <h4>{project.title}</h4>
                      </a>
                      <p>{project.summary}</p>
                      <p>{project.tech}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
      </Element>
    )
  }
}

export default Projects;
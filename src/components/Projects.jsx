import React from 'react'

const projects = [
 
  
  { title: ' template using bootstrap', view: 'https://github.com/roshnigupta9718/bootstrap-site' },
  { title: 'template ', view: 'https://github.com/roshnigupta9718/templates' },
  { title: 'text to speech', view: 'https://github.com/roshnigupta9718/text-to-speech' },
  {title:' react image search',view:'https://github.com/roshnigupta9718/image-search-react'},
  { title: 'bmi', view: 'https://github.com/roshnigupta9718/bmi' },
  {title:' redux movie add/song',view:'https://github.com/roshnigupta9718/sp-rtk/tree/main/src/rtk'}

  ];
function Projects() {
  return (
    <div style={{backgroundColor:'pink'}} className="projects-grid">
    {projects.map((project, index) => (
    <div key={index} className="project-card">
    <h3>{project.title}</h3>
    <a href={project.view}>view project</a>
    </div>
    ))}
    </div>
  )
}

export default Projects
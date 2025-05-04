import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

function ProjectCard({ project }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
      </div>
    );
  }
  
  export default ProjectCard;
  
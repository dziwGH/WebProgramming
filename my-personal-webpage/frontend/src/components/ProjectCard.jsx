function ProjectCard({ title, description, technologies, githubUrl }) {
  return (
    <div className="bg-[#353535] text-[#FFFFFF] p-4 rounded-lg shadow-md hover:shadow-lg transition w-full md:w-1/2 lg:w-1/3">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-2">{description}</p>
      <p className="mb-2 text-sm text-[#d9d9d9]">Tech: {technologies.join(', ')}</p>
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#3c6e71] hover:underline"
      >
        Github
      </a>
    </div>
  );
}

export default ProjectCard;

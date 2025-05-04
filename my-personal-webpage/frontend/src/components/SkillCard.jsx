function SkillCard({ skill, description, image }) {
    return (
      <div className="bg-[#353535] p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src={`/assets/${image}`}  // Local image path
          alt={skill}
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold text-white mb-2">{skill}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  }
  
  export default SkillCard;
  
import { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error('Error fetching skills:', err));
  }, []);

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill._id}
            skill={skill.name}
            description={skill.description}
            image={skill.image}  // Image path from MongoDB
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;

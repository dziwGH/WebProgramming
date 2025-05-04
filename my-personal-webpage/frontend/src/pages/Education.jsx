import { useEffect, useState } from 'react';
import EducationCard from '../components/EducationCard';

function Education() {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/education')
      .then(res => res.json())
      .then(data => setEducationList(data))
      .catch(err => console.error('Error fetching education data:', err));
  }, []);

  return (
    <div className="p-8 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center">Education</h1>
      <div className="flex flex-col gap-6 items-center">
        {educationList.map((edu) => (
          <EducationCard
            key={edu._id}
            school={edu.school}
            degree={edu.degree}
            fieldOfStudy={edu.fieldOfStudy}
            startDate={edu.startDate}
            endDate={edu.endDate}
            description={edu.description}
            location={edu.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;

function EducationCard({ school, degree, fieldOfStudy, startDate, endDate, description, location }) {

  
    return (
      <div className="bg-[#353535] text-[#FFFFFF] p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-xl font-bold">{school}</h2>
        <p className="text-sm text-[#d9d9d9] mb-1">{location}</p>
        <p className="font-medium">
          {degree} in {fieldOfStudy}
        </p>
        <p className="text-sm text-[#d9d9d9] mb-2">
          {startDate} – {endDate}
        </p>
        {description && <p className="text-sm text-[#d9d9d9]">{description}</p>}
      </div>
    );
  }
  
  export default EducationCard;
  
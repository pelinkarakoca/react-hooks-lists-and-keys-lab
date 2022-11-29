import React from "react";

function ProjectItem({ name, about, technologies }) {
  const eachTechnologies = technologies.map((technology) => {
    return (<span key={technology}>{technology}</span> )
  })
  console.log(eachTechnologies);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {eachTechnologies}
      </div>
    </div>
  );
}

export default ProjectItem;

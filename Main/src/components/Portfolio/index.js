import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'maximum-notetaker',
      description: 'Note taking Application',
      link: "https://maximumtaker-556232facc9a.herokuapp.com",
      repo: "https://github.com/RdySetShine/NoteMaximumTaker"
    },
    {
      name: '',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: '',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: '',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: '',
      description: '',
      link: "",
      repo: ""
    },
    {
      name: '',
      description: '',
      link: "",
      repo: ""
    }

    // https://maximumtaker-556232facc9a.herokuapp.com/




  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'maximum-notetaker',
      description: 'Note taking Application',
      link: "https://maximumtaker-556232facc9a.herokuapp.com",
      repo: "https://github.com/RdySetShine/NoteMaximumTaker",
      img: "https://github.com/RdySetShine/ReactProfile/blob/main/src/assets/projects/maximum-notetaker.jpg",
    },
    {
      name: 'refactored-horiseon-webpage',
      description: 'HTML, CSS',
      link: "https://rdysetshine.github.io/Refactored-Horiseon-Webpage/",
      repo: "https://github.com/RdySetShine/Refactored-Horiseon-Webpage"
    },
    {
      name: 'POKE-FEELS-MOVIE-EDITION',
      description: 'HTML, CSS, JS ',
      link: "https://massicottec.github.io/poke-feels-movie-edition/index.html",
      repo: "https://github.com/RdySetShine/Pok-feels-Movie-Edition"
    },
    {
      name: 'Sick-Weather-Dashboard',
      description: 'HTML, CSS, JS',
      link: "https://rdysetshine.github.io/Sick-Weather-Dashboard/",
      repo: "https://github.com/RdySetShine/Sick-Weather-Dashboard"
    },
    {
      name: 'Fern-Formation',
      description: 'MERN , GraphQL, A search Book Application with links and Descriptions ',
      link: "https://fernformation-f54f449ba084.herokuapp.com/",
      repo: "https://github.com/RdySetShine/FernFormation"
    },
    {
      name: 'Personal-Portfolio',
      description: 'HTML, CCS, Landing Page with Professional contact Info ',
      link: "https://rdysetshine.github.io/My-Portfolio-Assignment/",
      repo: "https://github.com/RdySetShine/My-Portfolio-Assignment"
    },
    {
      name: 'Kb-Fanatics',
      description: 'e-commerce store for Keyboards using React ',
      link: "https://kb-fanatics-2-c059b16fa22f.herokuapp.com/",
      repo: "https://github.com/RdySetShine/KBFanatics"
    }
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

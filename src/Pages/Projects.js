import React from 'react';
import p1 from '../assets/firstproject.png';

// Sample project data
const projects = [
  {
    id: 1,
    name: 'MY FIRST PROJECT',
    description: 'A personal portfolio website built with React and Tailwind CSS, designed to showcase my skills, projects, and experience. It features sections like "About Me," "Projects," and "Contact," with a responsive design for a seamless user experience across devices. This platform highlights my work and connects with potential clients and employers.',
    imageUrl: p1, // Replace with your image URL
  },
  {
    id: 2,
    name: 'Upcoming Project',
    description: 'Upcoming project details.',
    imageUrl: 'https://via.placeholder.com/30', // Replace with your image URL
  },
  // Add more projects here (up to 10)
];

const Projects = () => {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <img src={project.imageUrl} alt={project.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
